"use client";

/* DEMO ONLY, DO NOT USE IN PRODUCTION */

import { Button } from "@bunship-ai/ui/components/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@bunship-ai/ui/components/command";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@bunship-ai/ui/components/dialog";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@bunship-ai/ui/components/popover";
import { ScrollArea } from "@bunship-ai/ui/components/scroll-area";
import { cn } from "@bunship-ai/ui/lib/utils";
import { CopilotPlugin } from "@platejs/ai/react";
import { Check, ChevronsUpDown, Settings, Wand2Icon } from "lucide-react";
import { useEditorRef } from "platejs/react";
import * as React from "react";
import { toast } from "sonner";
import { useAIConfig } from "./lib/editor-config";
import { aiChatPlugin } from "./plugins/ai-kit";

type Model = {
	label: string;
	value: string;
};

export function SettingsDialog() {
	const editor = useEditorRef();
	const aiConfig = useAIConfig();

	const [models, setModels] = React.useState<Model[]>([]);
	const [isLoadingModels, setIsLoadingModels] = React.useState(false);
	const [tempModel, setTempModel] = React.useState<Model | null>(null);
	const [open, setOpen] = React.useState(false);
	const [openModel, setOpenModel] = React.useState(false);

	// 从 API 加载模型列表
	React.useEffect(() => {
		const loadModels = async () => {
			setIsLoadingModels(true);
			try {
				const baseUrl = aiConfig.apiBaseUrl || "";
				const modelsUrl = `${baseUrl}/api/ai/models`;
				const resolvedHeaders = aiConfig.getHeaders
					? await aiConfig.getHeaders()
					: aiConfig.headers;

				const response = await fetch(modelsUrl, {
					credentials: aiConfig.credentials ?? "include",
					headers: resolvedHeaders,
				});

				if (!response.ok) {
					throw new Error("Failed to load models");
				}

				const data = await response.json();
				const loadedModels = data.models || [];

				setModels(loadedModels);

				// 设置默认模型（如果列表不为空）
				if (loadedModels.length > 0 && !tempModel) {
					setTempModel(loadedModels[0]);
				}
			} catch (error) {
				console.error("Failed to load models:", error);
				toast.error("无法加载模型列表", {
					description: "请稍后重试",
				});
				// 设置默认模型列表作为后备
				setModels([
					{ label: "GPT-4o Mini", value: "gpt-4o-mini" },
					{ label: "GPT-4o", value: "gpt-4o" },
				]);
				if (!tempModel) {
					setTempModel({ label: "GPT-4o Mini", value: "gpt-4o-mini" });
				}
			} finally {
				setIsLoadingModels(false);
			}
		};

		if (open) {
			loadModels();
		}
	}, [open, aiConfig.apiBaseUrl]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!tempModel) {
			toast.error("请选择一个模型");
			return;
		}

		// Update AI chat options
		const chatOptions = editor.getOptions(aiChatPlugin).chatOptions ?? {};

		editor.setOption(aiChatPlugin, "chatOptions", {
			...chatOptions,
			body: {
				...chatOptions.body,
				model: tempModel.value,
			},
		});

		setOpen(false);

		// Update AI complete options
		const completeOptions =
			editor.getOptions(CopilotPlugin).completeOptions ?? {};
		editor.setOption(CopilotPlugin, "completeOptions", {
			...completeOptions,
			body: {
				...completeOptions.body,
				model: tempModel.value,
			},
		});
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					size="icon"
					variant="default"
					className={cn(
						"group fixed right-4 bottom-4 z-50 size-10 overflow-hidden",
						"rounded-full shadow-md hover:shadow-lg",
					)}
					// data-block-hide
				>
					<Settings className="size-4" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-xl">Settings</DialogTitle>
					<DialogDescription>配置 AI 模型偏好设置</DialogDescription>
				</DialogHeader>

				<form className="space-y-10" onSubmit={handleSubmit}>
					{/* AI Settings Group */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="size-8 rounded-full bg-purple-100 p-2 dark:bg-purple-900">
								<Wand2Icon className="size-4 text-purple-600 dark:text-purple-400" />
							</div>
							<h4 className="font-semibold">AI</h4>
						</div>

						<div className="space-y-4">
							<div className="group relative">
								<label
									className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 font-medium text-foreground text-xs group-has-disabled:opacity-50"
									htmlFor="select-model"
								>
									Model
								</label>
								<Popover open={openModel} onOpenChange={setOpenModel}>
									<PopoverTrigger id="select-model" asChild>
										<Button
											size="lg"
											variant="outline"
											className="w-full justify-between"
											aria-expanded={openModel}
											role="combobox"
											disabled={isLoadingModels || !tempModel}
										>
											{isLoadingModels ? (
												<span>加载中...</span>
											) : tempModel ? (
												<code>{tempModel.label}</code>
											) : (
												<span>请选择模型</span>
											)}
											<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-[400px] p-0" align="start">
										<Command>
											<CommandInput placeholder="搜索模型..." />
											<CommandEmpty>未找到模型</CommandEmpty>
											<CommandGroup>
												<ScrollArea className="h-[300px]">
													{models.map((m) => (
														<CommandItem
															key={m.value}
															value={m.value}
															onSelect={() => {
																setTempModel(m);
																setOpenModel(false);
															}}
														>
															<Check
																className={cn(
																	"mr-2 size-4",
																	tempModel?.value === m.value
																		? "opacity-100"
																		: "opacity-0",
																)}
															/>
															<code>{m.label}</code>
														</CommandItem>
													))}
												</ScrollArea>
											</CommandGroup>
										</Command>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</div>

					<Button
						size="lg"
						className="w-full"
						type="submit"
						disabled={!tempModel}
					>
						保存更改
					</Button>
				</form>

				<p className="text-muted-foreground text-sm">
					配置仅用于当前会话，不会保存到服务器。
				</p>
			</DialogContent>
		</Dialog>
	);
}
