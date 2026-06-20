"use client";

import { CursorOverlay } from "@bunship-ai/editor/components/cursor-overlay";
import { CursorOverlayPlugin } from "@platejs/selection/react";

export const CursorOverlayKit = [
	CursorOverlayPlugin.configure({
		render: {
			afterEditable: () => <CursorOverlay />,
		},
	}),
];
