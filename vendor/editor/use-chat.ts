"use client";

import { type UseChatHelpers, useChat as useBaseChat } from "@ai-sdk/react";
import { AIChatPlugin, aiCommentToRange } from "@platejs/ai/react";
import { getCommentKey, getTransientCommentKey } from "@platejs/comment";
import { deserializeMd } from "@platejs/markdown";
import { BlockSelectionPlugin } from "@platejs/selection/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { KEYS, NodeApi, nanoid, TextApi, type TNode } from "platejs";
import { useEditorRef, usePluginOption } from "platejs/react";
import * as React from "react";
import { toast } from "sonner";

import { aiChatPlugin } from "./plugins/ai-kit";

import { discussionPlugin } from "./plugins/discussion-kit";

export type ToolName = "comment" | "edit" | "generate";

export type TComment = {
	comment: {
		blockId: string;
		comment: string;
		content: string;
	} | null;
	status: "finished" | "streaming";
};

export type MessageDataPart = {
	toolName: ToolName;
	comment?: TComment;
};

export type Chat = UseChatHelpers<ChatMessage>;

export type ChatMessage = UIMessage<{}, MessageDataPart>;

import { useAIApiUrl } from "./lib/editor-config";
import { useAIConfig } from "./lib/editor-config";

export const useChat = () => {
	const editor = useEditorRef();
	const options = usePluginOption(aiChatPlugin, "chatOptions");
	const commandApiUrl = useAIApiUrl("command");
	const aiConfig = useAIConfig();

	const abortControllerRef = React.useRef<AbortController | null>(null);
	const _abortFakeStream = () => {
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
			abortControllerRef.current = null;
		}
	};

	const baseChat = useBaseChat<ChatMessage>({
		id: "editor",
		transport: new DefaultChatTransport({
			api: commandApiUrl || options.api || "/api/ai/command",
			// Mock the API response. Remove it when you implement the route /api/ai/command
			fetch: (async (input, init) => {
				const bodyOptions = editor.getOptions(aiChatPlugin).chatOptions?.body;

				const initBody = JSON.parse(init?.body as string);

				const body = {
					...initBody,
					...bodyOptions,
				};
				const resolvedHeaders = aiConfig.getHeaders
					? await aiConfig.getHeaders()
					: aiConfig.headers;

				const res = await fetch(input, {
					...init,
					body: JSON.stringify(body),
					credentials: aiConfig.credentials ?? "include",
					headers: {
						...(init?.headers || {}),
						...(resolvedHeaders || {}),
					},
				});

				// 如果请求失败，尝试解析错误信息
				if (!res.ok) {
					let errorMessage = "AI 请求失败";

					try {
						const errorData = await res.json();
						errorMessage =
							errorData?.error || errorData?.message || "AI 请求失败";
					} catch {
						// 无法解析错误信息，使用默认消息
					}

					// 抛出错误，让 useChat 的错误处理捕获
					throw new Error(errorMessage);
				}

				return res;
			}) as typeof fetch,
		}),
		onData(data: any) {
			if (data.type === "data-toolName") {
				editor.setOption(AIChatPlugin, "toolName", data.data);
			}

			if (data.type === "data-comment" && data.data) {
				if (data.data.status === "finished") {
					editor.getApi(BlockSelectionPlugin).blockSelection.deselect();

					return;
				}

				const aiComment = data.data.comment!;
				const range = aiCommentToRange(editor, aiComment);

				if (!range) return console.warn("No range found for AI comment");

				const discussions =
					editor.getOption(discussionPlugin, "discussions") || [];

				// Generate a new discussion ID
				const discussionId = nanoid();

				// Create a new comment
				const newComment = {
					id: nanoid(),
					contentRich: [{ children: [{ text: aiComment.comment }], type: "p" }],
					createdAt: new Date(),
					discussionId,
					isEdited: false,
					userId: editor.getOption(discussionPlugin, "currentUserId"),
				};

				// Create a new discussion
				const newDiscussion = {
					id: discussionId,
					comments: [newComment],
					createdAt: new Date(),
					documentContent: deserializeMd(editor, aiComment.content)
						.map((node: TNode) => NodeApi.string(node))
						.join("\n"),
					isResolved: false,
					userId: editor.getOption(discussionPlugin, "currentUserId"),
				};

				// Update discussions
				const updatedDiscussions = [...discussions, newDiscussion];
				editor.setOption(discussionPlugin, "discussions", updatedDiscussions);

				// Apply comment marks to the editor
				editor.tf.withMerging(() => {
					editor.tf.setNodes(
						{
							[getCommentKey(newDiscussion.id)]: true,
							[getTransientCommentKey()]: true,
							[KEYS.comment]: true,
						},
						{
							at: range,
							match: TextApi.isText,
							split: true,
						},
					);
				});
			}
		},

		...options,
	});

	const chat = {
		...baseChat,
		_abortFakeStream,
	};

	React.useEffect(() => {
		editor.setOption(AIChatPlugin, "chat", chat as any);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chat.status, chat.messages, chat.error]);

	// 错误处理：显示 toast 提示
	React.useEffect(() => {
		if (chat.error) {
			toast.error("ERROR", {
				description: chat.error.message || "请稍后重试",
			});
		}
	}, [chat.error]);

	return chat;
};
