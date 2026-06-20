"use client";

import { SlashInputElement } from "@bunship-ai/editor/components/slash-node";
import { SlashInputPlugin, SlashPlugin } from "@platejs/slash-command/react";
import { KEYS } from "platejs";

export const SlashKit = [
	SlashPlugin.configure({
		options: {
			triggerQuery: (editor) =>
				!editor.api.some({
					match: { type: editor.getType(KEYS.codeBlock) },
				}),
		},
	}),
	SlashInputPlugin.withComponent(SlashInputElement),
];
