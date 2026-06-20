"use client";

import { AILoadingBar, AIMenu } from "@bunship-ai/editor/components/ai-menu";
import { AIAnchorElement, AILeaf } from "@bunship-ai/editor/components/ai-node";
import { CursorOverlayKit } from "@bunship-ai/editor/plugins/cursor-overlay-kit";
import { MarkdownKit } from "@bunship-ai/editor/plugins/markdown-kit";
import { useChat } from "@bunship-ai/editor/use-chat";
import { withAIBatch } from "@platejs/ai";
import {
	AIChatPlugin,
	AIPlugin,
	applyAISuggestions,
	streamInsertChunk,
	useChatChunk,
} from "@platejs/ai/react";
import { getPluginType, KEYS, PathApi } from "platejs";
import { usePluginOption } from "platejs/react";

export const aiChatPlugin = AIChatPlugin.extend({
	options: {
		chatOptions: {
			api: "/api/ai/command", // 默认值，会被 useHooks 中的动态配置覆盖
			body: {},
		},
	},
	render: {
		afterContainer: AILoadingBar,
		afterEditable: AIMenu,
		node: AIAnchorElement,
	},
	shortcuts: { show: { keys: "mod+j" } },
	useHooks: ({ editor, getOption }) => {
		useChat();

		const mode = usePluginOption(AIChatPlugin, "mode");
		const toolName = usePluginOption(AIChatPlugin, "toolName");
		useChatChunk({
			onChunk: ({ chunk, isFirst, nodes, text: content }) => {
				if (isFirst && mode === "insert") {
					editor.tf.withoutSaving(() => {
						editor.tf.insertNodes(
							{
								children: [{ text: "" }],
								type: getPluginType(editor, KEYS.aiChat),
							},
							{
								at: PathApi.next(editor.selection!.focus.path.slice(0, 1)),
							},
						);
					});
					editor.setOption(AIChatPlugin, "streaming", true);
				}

				if (mode === "insert" && nodes.length > 0) {
					withAIBatch(
						editor,
						() => {
							if (!getOption("streaming")) return;
							editor.tf.withScrolling(() => {
								streamInsertChunk(editor, chunk, {
									textProps: {
										[getPluginType(editor, KEYS.ai)]: true,
									},
								});
							});
						},
						{ split: isFirst },
					);
				}

				if (toolName === "edit" && mode === "chat") {
					withAIBatch(
						editor,
						() => {
							applyAISuggestions(editor, content);
						},
						{
							split: isFirst,
						},
					);
				}
			},
			onFinish: () => {
				editor.setOption(AIChatPlugin, "streaming", false);
				editor.setOption(AIChatPlugin, "_blockChunks", "");
				editor.setOption(AIChatPlugin, "_blockPath", null);
				editor.setOption(AIChatPlugin, "_mdxName", null);
			},
		});
	},
});

export const AIKit = [
	...CursorOverlayKit,
	...MarkdownKit,
	AIPlugin.withComponent(AILeaf),
	aiChatPlugin,
];
