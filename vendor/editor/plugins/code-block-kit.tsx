"use client";

import {
	CodeBlockElement,
	CodeLineElement,
	CodeSyntaxLeaf,
} from "@bunship-ai/editor/components/code-block-node";
import {
	CodeBlockPlugin,
	CodeLinePlugin,
	CodeSyntaxPlugin,
} from "@platejs/code-block/react";
import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);

export const CodeBlockKit = [
	CodeBlockPlugin.configure({
		node: { component: CodeBlockElement },
		options: { lowlight },
		shortcuts: { toggle: { keys: "mod+alt+8" } },
	}),
	CodeLinePlugin.withComponent(CodeLineElement),
	CodeSyntaxPlugin.withComponent(CodeSyntaxLeaf),
];
