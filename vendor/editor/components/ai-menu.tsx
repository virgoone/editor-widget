"use client";

import { commentPlugin } from "@bunship-ai/editor/plugins/comment-kit";
import { Button } from "@bunship-ai/ui/components/button";
import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@bunship-ai/ui/components/command";
import {
	Popover,
	PopoverAnchor,
	PopoverContent,
} from "@bunship-ai/ui/components/popover";
import { Textarea } from "@bunship-ai/ui/components/textarea";
import { cn } from "@bunship-ai/ui/lib/utils";
import {
	AIChatPlugin,
	AIPlugin,
	useEditorChat,
	useLastAssistantMessage,
} from "@platejs/ai/react";
import { getTransientCommentKey } from "@platejs/comment";
import { BlockSelectionPlugin, useIsSelecting } from "@platejs/selection/react";
import { getTransientSuggestionKey } from "@platejs/suggestion";
import { Command as CommandPrimitive } from "cmdk";
import {
	Album,
	BadgeHelp,
	BookOpenCheck,
	Check,
	CornerUpLeft,
	FeatherIcon,
	ListEnd,
	ListMinus,
	ListPlus,
	Loader2Icon,
	PauseIcon,
	PenLine,
	SmileIcon,
	Wand,
	X,
} from "lucide-react";
import {
	isHotkey,
	KEYS,
	NodeApi,
	type NodeEntry,
	type SlateEditor,
	TextApi,
} from "platejs";
import {
	type PlateEditor,
	useEditorPlugin,
	useEditorRef,
	useFocusedLast,
	useHotkeys,
	usePluginOption,
} from "platejs/react";
import * as React from "react";

import { AIChatEditor } from "./ai-chat-editor";

export function AIMenu() {
	const { api, editor } = useEditorPlugin(AIChatPlugin);
	const mode = usePluginOption(AIChatPlugin, "mode");
	const toolName = usePluginOption(AIChatPlugin, "toolName");

	const streaming = usePluginOption(AIChatPlugin, "streaming");
	const isSelecting = useIsSelecting();
	const isFocusedLast = useFocusedLast();
	const open = usePluginOption(AIChatPlugin, "open") && isFocusedLast;
	const [value, setValue] = React.useState("");

	const [input, setInput] = React.useState("");
	const [articlePromptOpen, setArticlePromptOpen] = React.useState(false);
	const [articlePrompt, setArticlePrompt] = React.useState("");
	const [articlePromptPhase, setArticlePromptPhase] = React.useState<
		"idle" | "pending" | "running"
	>("idle");
	const [articlePromptError, setArticlePromptError] = React.useState<
		string | null
	>(null);

	const chat = usePluginOption(AIChatPlugin, "chat");

	const { messages, status, error } = chat;
	const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(
		null,
	);

	const content = useLastAssistantMessage()?.parts.find(
		(part) => part.type === "text",
	)?.text;

	React.useEffect(() => {
		if (streaming) {
			const anchor = api.aiChat.node({ anchor: true });
			setTimeout(() => {
				const anchorDom = editor.api.toDOMNode(anchor![0])!;
				setAnchorElement(anchorDom);
			}, 0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [streaming]);

	const setOpen = (open: boolean) => {
		if (open) {
			api.aiChat.show();
		} else {
			api.aiChat.hide();
		}
	};

	const show = (anchorElement: HTMLElement) => {
		setAnchorElement(anchorElement);
		setOpen(true);
	};

	useEditorChat({
		onOpenBlockSelection: (blocks: NodeEntry[]) => {
			show(editor.api.toDOMNode(blocks.at(-1)![0])!);
		},
		onOpenChange: (open) => {
			if (!open) {
				setAnchorElement(null);
				setInput("");
				setArticlePromptOpen(false);
				setArticlePrompt("");
				setArticlePromptPhase("idle");
				setArticlePromptError(null);
			}
		},
		onOpenCursor: () => {
			const [ancestor] = editor.api.block({ highest: true })!;

			if (!editor.api.isAt({ end: true }) && !editor.api.isEmpty(ancestor)) {
				editor
					.getApi(BlockSelectionPlugin)
					.blockSelection.set(ancestor.id as string);
			}

			show(editor.api.toDOMNode(ancestor)!);
		},
		onOpenSelection: () => {
			show(editor.api.toDOMNode(editor.api.blocks().at(-1)![0])!);
		},
	});

	useHotkeys("esc", () => {
		api.aiChat.stop();

		// remove when you implement the route /api/ai/command
		(chat as any)._abortFakeStream();
	});

	const isLoading = status === "streaming" || status === "submitted";

	const openGenerateArticlePrompt = React.useCallback((seedPrompt?: string) => {
		setArticlePrompt(seedPrompt?.trim() ?? "");
		setArticlePromptOpen(true);
		setArticlePromptPhase("idle");
		setArticlePromptError(null);
	}, []);

	const handleGenerateArticle = React.useCallback(async () => {
		const prompt = articlePrompt.trim();
		if (!prompt || articlePromptPhase !== "idle") return;

		setArticlePromptPhase("pending");
		setArticlePromptError(null);

		try {
			const submitPromise = api.aiChat.submit(prompt, {
				mode: "insert",
				prompt: `Generate a complete article draft based on the following prompt:\n${prompt}`,
				toolName: "generate",
			});

			// Close prompt panel as soon as request is accepted to avoid UI flicker
			// and keep the standard inline AI loading/suggestion flow.
			setArticlePromptOpen(false);
			setArticlePromptPhase("running");
			setInput("");
			setArticlePromptError(null);

			await submitPromise;
		} catch (submitError) {
			setArticlePromptPhase("idle");
			setArticlePromptOpen(true);
			setArticlePromptError(
				submitError instanceof Error
					? submitError.message
					: "Failed to submit generation request.",
			);
		}
	}, [api, articlePrompt, articlePromptPhase]);

	React.useEffect(() => {
		if (articlePromptPhase !== "running" || status !== "ready") return;

		setArticlePromptPhase("idle");

		if (error) {
			setArticlePromptOpen(true);
			setArticlePromptError(
				error.message || "Failed to generate article. Please retry.",
			);
			return;
		}

		setArticlePrompt("");
		setArticlePromptError(null);
	}, [articlePromptPhase, error, status]);

	const isArticlePromptSubmitting = articlePromptPhase !== "idle";
	const hideCommandInputInSuggestion =
		!isLoading &&
		messages.length > 0 &&
		toolName === "generate" &&
		mode === "insert";

	const closeArticlePrompt = React.useCallback(() => {
		if (isArticlePromptSubmitting) return;
		setArticlePromptOpen(false);
		setArticlePrompt("");
		setArticlePromptPhase("idle");
		setArticlePromptError(null);
	}, [isArticlePromptSubmitting]);

	React.useEffect(() => {
		if (toolName === "edit" && mode === "chat" && !isLoading) {
			let anchorNode = editor.api.node({
				at: [],
				reverse: true,
				match: (n) => !!n[KEYS.suggestion] && !!n[getTransientSuggestionKey()],
			});

			if (!anchorNode) {
				anchorNode = editor
					.getApi(BlockSelectionPlugin)
					.blockSelection.getNodes({ selectionFallback: true, sort: true })
					.at(-1);
			}

			if (!anchorNode) return;

			const block = editor.api.block({ at: anchorNode[1] });
			setAnchorElement(editor.api.toDOMNode(block![0]!)!);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	if (isLoading && mode === "insert") return null;

	if (toolName === "comment") return null;

	if (toolName === "edit" && mode === "chat" && isLoading) return null;

	if (!anchorElement) return null;

	return (
		<Popover open={open} onOpenChange={setOpen} modal={false}>
			<PopoverAnchor virtualRef={{ current: anchorElement! }} />

			<PopoverContent
				className="border-none bg-transparent p-0 shadow-none"
				style={{
					width: anchorElement?.offsetWidth,
				}}
				onEscapeKeyDown={(e) => {
					e.preventDefault();

					api.aiChat.hide();
				}}
				align="center"
				side="bottom"
			>
				<Command
					className="editor-toolbar-surface w-full"
					value={value}
					onValueChange={setValue}
				>
					{mode === "chat" &&
						isSelecting &&
						content &&
						toolName === "generate" && <AIChatEditor content={content} />}

					{isLoading ? (
						<div className="flex grow select-none items-center gap-2 p-2 text-muted-foreground text-sm">
							<Loader2Icon className="size-4 animate-spin" />
							{messages.length > 1 ? "Editing..." : "Thinking..."}
						</div>
					) : !hideCommandInputInSuggestion ? (
						<CommandPrimitive.Input
							className={cn(
								"flex h-9 w-full min-w-0 border-input bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] placeholder:text-muted-foreground md:text-sm dark:bg-input/30",
								"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
								"border-b focus-visible:ring-transparent",
							)}
							value={input}
							onKeyDown={(e) => {
								if (isHotkey("backspace")(e) && input.length === 0) {
									e.preventDefault();
									api.aiChat.hide();
								}
								if (isHotkey("enter")(e) && !e.shiftKey && !value) {
									e.preventDefault();
									void api.aiChat.submit(input);
									setInput("");
								}
							}}
							onValueChange={setInput}
							placeholder="Ask AI anything..."
							data-plate-focus
							autoFocus
						/>
					) : null}

					{articlePromptOpen && (
						<div className="space-y-2 border-t p-3">
							<Textarea
								value={articlePrompt}
								onChange={(event) => setArticlePrompt(event.target.value)}
								placeholder="Describe keywords, angle, audience, and structure..."
								className="min-h-24"
								autoFocus={!isArticlePromptSubmitting}
								disabled={isArticlePromptSubmitting}
							/>
							{articlePromptError && (
								<p className="text-destructive text-xs">{articlePromptError}</p>
							)}
							<div className="flex items-center justify-end gap-2">
								<Button
									size="sm"
									variant="outline"
									onClick={closeArticlePrompt}
									disabled={isArticlePromptSubmitting}
								>
									Cancel
								</Button>
								<Button
									size="sm"
									onClick={() => void handleGenerateArticle()}
									disabled={!articlePrompt.trim() || isArticlePromptSubmitting}
								>
									{isArticlePromptSubmitting && (
										<Loader2Icon className="mr-1 size-3.5 animate-spin" />
									)}
									Generate
								</Button>
							</div>
						</div>
					)}

					{!isLoading && !articlePromptOpen && (
						<CommandList>
							<AIMenuItems
								input={input}
								onGenerateArticlePrompt={openGenerateArticlePrompt}
								setInput={setInput}
								setValue={setValue}
							/>
						</CommandList>
					)}
				</Command>
			</PopoverContent>
		</Popover>
	);
}

type EditorChatState =
	| "cursorCommand"
	| "cursorSuggestion"
	| "selectionCommand"
	| "selectionSuggestion";

const AICommentIcon = () => (
	<svg
		fill="none"
		height="24"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 0h24v24H0z" fill="none" stroke="none" />
		<path d="M8 9h8" />
		<path d="M8 13h4.5" />
		<path d="M10 19l-1 -1h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
		<path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
	</svg>
);

const aiChatItems = {
	accept: {
		icon: <Check />,
		label: "Accept",
		value: "accept",
		onSelect: ({ aiEditor, editor }) => {
			const { mode, toolName } = editor.getOptions(AIChatPlugin);

			if (mode === "chat" && toolName === "generate") {
				return editor
					.getTransforms(AIChatPlugin)
					.aiChat.replaceSelection(aiEditor);
			}

			editor.getTransforms(AIChatPlugin).aiChat.accept();
			editor.tf.focus({ edge: "end" });
		},
	},
	comment: {
		icon: <AICommentIcon />,
		label: "Comment",
		value: "comment",
		onSelect: ({ editor, input }) => {
			editor.getApi(AIChatPlugin).aiChat.submit(input, {
				mode: "insert",
				prompt:
					"Please comment on the following content and provide reasonable and meaningful feedback.",
				toolName: "comment",
			});
		},
	},
	continueWrite: {
		icon: <PenLine />,
		label: "Continue writing",
		value: "continueWrite",
		onSelect: ({ editor, input }) => {
			const ancestorNode = editor.api.block({ highest: true });

			if (!ancestorNode) return;

			const isEmpty = NodeApi.string(ancestorNode[0]).trim().length === 0;
			const normalizedInput = input.trim();
			const extraRequirements = normalizedInput
				? `\nAdditional user requirements:\n${normalizedInput}`
				: "";

			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				mode: "insert",
				prompt: isEmpty
					? `<Document>
{editor}
</Document>
Start writing a new paragraph AFTER <Document> ONLY ONE SENTENCE.${extraRequirements}`
					: `Continue writing AFTER <Block> ONLY ONE SENTENCE. DONT REPEAT THE TEXT.${extraRequirements}`,
				toolName: "generate",
			});
		},
	},
	discard: {
		icon: <X />,
		label: "Discard",
		shortcut: "Escape",
		value: "discard",
		onSelect: ({ editor }) => {
			editor.getTransforms(AIPlugin).ai?.undo?.();
			editor.getApi(AIChatPlugin).aiChat.hide();
		},
	},
	emojify: {
		icon: <SmileIcon />,
		label: "Emojify",
		value: "emojify",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Emojify",
				toolName: "edit",
			});
		},
	},
	explain: {
		icon: <BadgeHelp />,
		label: "Explain",
		value: "explain",
		onSelect: ({ editor, input }) => {
			const normalizedInput = input.trim();
			const defaultPrompt = normalizedInput
				? `Explain {editor}. Focus on this user requirement: ${normalizedInput}`
				: "Explain {editor}";
			const selectingPrompt = normalizedInput
				? `Explain. Focus on this user requirement: ${normalizedInput}`
				: "Explain";

			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: {
					default: defaultPrompt,
					selecting: selectingPrompt,
				},
				toolName: "generate",
			});
		},
	},
	generateArticle: {
		icon: <Wand />,
		label: "Generate article",
		value: "generateArticle",
		onSelect: () => {},
	},
	fixSpelling: {
		icon: <Check />,
		label: "Fix spelling & grammar",
		value: "fixSpelling",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Fix spelling and grammar",
				toolName: "edit",
			});
		},
	},
	generateMarkdownSample: {
		icon: <BookOpenCheck />,
		label: "Generate Markdown sample",
		value: "generateMarkdownSample",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Generate a markdown sample",
				toolName: "generate",
			});
		},
	},
	generateMdxSample: {
		icon: <BookOpenCheck />,
		label: "Generate MDX sample",
		value: "generateMdxSample",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Generate a mdx sample",
				toolName: "generate",
			});
		},
	},
	improveWriting: {
		icon: <Wand />,
		label: "Improve writing",
		value: "improveWriting",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Improve the writing",
				toolName: "edit",
			});
		},
	},
	insertBelow: {
		icon: <ListEnd />,
		label: "Insert below",
		value: "insertBelow",
		onSelect: ({ aiEditor, editor }) => {
			/** Format: 'none' Fix insert table */
			void editor
				.getTransforms(AIChatPlugin)
				.aiChat.insertBelow(aiEditor, { format: "none" });
		},
	},
	makeLonger: {
		icon: <ListPlus />,
		label: "Make longer",
		value: "makeLonger",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Make longer",
				toolName: "edit",
			});
		},
	},
	makeShorter: {
		icon: <ListMinus />,
		label: "Make shorter",
		value: "makeShorter",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Make shorter",
				toolName: "edit",
			});
		},
	},
	replace: {
		icon: <Check />,
		label: "Replace selection",
		value: "replace",
		onSelect: ({ aiEditor, editor }) => {
			void editor.getTransforms(AIChatPlugin).aiChat.replaceSelection(aiEditor);
		},
	},
	simplifyLanguage: {
		icon: <FeatherIcon />,
		label: "Simplify language",
		value: "simplifyLanguage",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				prompt: "Simplify the language",
				toolName: "edit",
			});
		},
	},
	summarize: {
		icon: <Album />,
		label: "Add a summary",
		value: "summarize",
		onSelect: ({ editor, input }) => {
			void editor.getApi(AIChatPlugin).aiChat.submit(input, {
				mode: "insert",
				prompt: {
					default: "Summarize {editor}",
					selecting: "Summarize",
				},
				toolName: "generate",
			});
		},
	},
	tryAgain: {
		icon: <CornerUpLeft />,
		label: "Try again",
		value: "tryAgain",
		onSelect: ({ editor }) => {
			void editor.getApi(AIChatPlugin).aiChat.reload();
		},
	},
} satisfies Record<
	string,
	{
		icon: React.ReactNode;
		label: string;
		value: string;
		component?: React.ComponentType<{ menuState: EditorChatState }>;
		filterItems?: boolean;
		items?: { label: string; value: string }[];
		shortcut?: string;
		onSelect?: ({
			aiEditor,
			editor,
			input,
		}: {
			aiEditor: SlateEditor;
			editor: PlateEditor;
			input: string;
		}) => void;
	}
>;

const menuStateItems: Record<
	EditorChatState,
	{
		items: (typeof aiChatItems)[keyof typeof aiChatItems][];
		heading?: string;
	}[]
> = {
	cursorCommand: [
		{
			items: [
				aiChatItems.generateArticle,
				aiChatItems.continueWrite,
				aiChatItems.explain,
			],
		},
	],
	cursorSuggestion: [
		{
			items: [aiChatItems.accept, aiChatItems.discard, aiChatItems.tryAgain],
		},
	],
	selectionCommand: [
		{
			items: [
				aiChatItems.generateArticle,
				aiChatItems.continueWrite,
				aiChatItems.explain,
			],
		},
	],
	selectionSuggestion: [
		{
			items: [
				aiChatItems.accept,
				aiChatItems.discard,
				aiChatItems.insertBelow,
				aiChatItems.tryAgain,
			],
		},
	],
};

export const AIMenuItems = ({
	input,
	onGenerateArticlePrompt,
	setInput,
	setValue,
}: {
	input: string;
	onGenerateArticlePrompt: (seedPrompt?: string) => void;
	setInput: (value: string) => void;
	setValue: (value: string) => void;
}) => {
	const editor = useEditorRef();
	const { messages } = usePluginOption(AIChatPlugin, "chat");
	const aiEditor = usePluginOption(AIChatPlugin, "aiEditor")!;
	const isSelecting = useIsSelecting();

	const menuState = React.useMemo(() => {
		if (messages && messages.length > 0) {
			return isSelecting ? "selectionSuggestion" : "cursorSuggestion";
		}

		return isSelecting ? "selectionCommand" : "cursorCommand";
	}, [isSelecting, messages]);

	const menuGroups = React.useMemo(() => {
		const items = menuStateItems[menuState];

		return items;
	}, [menuState]);

	React.useEffect(() => {
		const firstValue = menuGroups[0]?.items?.[0]?.value;
		if (firstValue) setValue(firstValue);
	}, [menuGroups, setValue]);

	return (
		<>
			{menuGroups.map((group, index) => (
				<CommandGroup key={index} heading={group.heading}>
					{group.items.map((menuItem) => (
						<CommandItem
							key={menuItem.value}
							className="[&_svg]:text-muted-foreground"
							value={menuItem.value}
							onSelect={() => {
								if (menuItem.value === "generateArticle") {
									onGenerateArticlePrompt(input);
									setInput("");
									return;
								}
								menuItem.onSelect?.({
									aiEditor,
									editor,
									input,
								});
								setInput("");
							}}
						>
							{menuItem.icon}
							<span>{menuItem.label}</span>
						</CommandItem>
					))}
				</CommandGroup>
			))}
		</>
	);
};

export function AILoadingBar() {
	const editor = useEditorRef();

	const toolName = usePluginOption(AIChatPlugin, "toolName");
	const chat = usePluginOption(AIChatPlugin, "chat");
	const mode = usePluginOption(AIChatPlugin, "mode");

	const { status } = chat;

	const { api } = useEditorPlugin(AIChatPlugin);

	const isLoading = status === "streaming" || status === "submitted";

	const handleComments = (type: "accept" | "reject") => {
		if (type === "accept") {
			editor.tf.unsetNodes([getTransientCommentKey()], {
				at: [],
				match: (n) => TextApi.isText(n) && !!n[KEYS.comment],
			});
		}

		if (type === "reject") {
			editor
				.getTransforms(commentPlugin)
				.comment.unsetMark({ transient: true });
		}

		api.aiChat.hide();
	};

	useHotkeys("esc", () => {
		api.aiChat.stop();

		// remove when you implement the route /api/ai/command
		(chat as any)._abortFakeStream();
	});

	if (
		isLoading &&
		(toolName === "comment" ||
			(toolName === "edit" && mode === "chat") ||
			(toolName === "generate" && mode === "insert"))
	) {
		return (
			<div
				className={cn(
					"absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 border border-border bg-muted px-3 py-1.5 text-muted-foreground text-sm transition-all duration-300 [border-radius:var(--editor-chip-radius)] [box-shadow:var(--editor-chip-shadow)]",
				)}
			>
				<span className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
				<span>{status === "submitted" ? "Thinking..." : "Writing..."}</span>
				<Button
					size="sm"
					variant="ghost"
					className="flex items-center gap-1 text-xs"
					onClick={() => api.aiChat.stop()}
				>
					<PauseIcon className="h-4 w-4" />
					Stop
					<kbd className="editor-kbd ml-1 px-1 font-mono text-[10px] text-muted-foreground">
						Esc
					</kbd>
				</Button>
			</div>
		);
	}

	if (toolName === "comment" && status === "ready") {
		return (
			<div
				className={cn(
					"absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-0 border border-border/50 bg-popover p-1 text-muted-foreground text-sm [border-radius:var(--editor-toolbar-radius)] [box-shadow:var(--editor-toolbar-shadow)]",
					"p-3",
				)}
			>
				{/* Header with controls */}
				<div className="flex w-full items-center justify-between gap-3">
					<div className="flex items-center gap-5">
						<Button
							size="sm"
							disabled={isLoading}
							onClick={() => handleComments("accept")}
						>
							Accept
						</Button>

						<Button
							size="sm"
							disabled={isLoading}
							onClick={() => handleComments("reject")}
						>
							Reject
						</Button>
					</div>
				</div>
			</div>
		);
	}

	return null;
}
