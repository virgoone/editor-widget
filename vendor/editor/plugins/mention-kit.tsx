"use client";

import {
	MentionElement,
	MentionInputElement,
} from "@bunship-ai/editor/components/mention-node";
import { MentionInputPlugin, MentionPlugin } from "@platejs/mention/react";

export const MentionKit = [
	MentionPlugin.configure({
		options: { triggerPreviousCharPattern: /^$|^[\s"']$/ },
	}).withComponent(MentionElement),
	MentionInputPlugin.withComponent(MentionInputElement),
];
