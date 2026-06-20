"use client";

import { ToggleElement } from "@bunship-ai/editor/components/toggle-node";

import { IndentKit } from "@bunship-ai/editor/plugins/indent-kit";
import { TogglePlugin } from "@platejs/toggle/react";

export const ToggleKit = [
	...IndentKit,
	TogglePlugin.withComponent(ToggleElement),
];
