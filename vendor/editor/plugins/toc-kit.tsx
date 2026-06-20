"use client";

import { TocElement } from "@bunship-ai/editor/components/toc-node";
import { TocPlugin } from "@platejs/toc/react";

export const TocKit = [
	TocPlugin.configure({
		options: {
			// isScroll: true,
			topOffset: 80,
		},
	}).withComponent(TocElement),
];
