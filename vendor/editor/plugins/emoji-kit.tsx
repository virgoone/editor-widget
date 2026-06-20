"use client";

import { EmojiInputElement } from "@bunship-ai/editor/components/emoji-node";
import emojiMartData from "@emoji-mart/data";
import { EmojiInputPlugin, EmojiPlugin } from "@platejs/emoji/react";

export const EmojiKit = [
	EmojiPlugin.configure({
		options: { data: emojiMartData as any },
	}),
	EmojiInputPlugin.withComponent(EmojiInputElement),
];
