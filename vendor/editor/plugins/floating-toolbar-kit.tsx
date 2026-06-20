"use client";

import { FloatingToolbar } from "@bunship-ai/editor/components/floating-toolbar";
import { FloatingToolbarButtons } from "@bunship-ai/editor/components/floating-toolbar-buttons";
import { createPlatePlugin } from "platejs/react";

export const FloatingToolbarKit = [
	createPlatePlugin({
		key: "floating-toolbar",
		render: {
			afterEditable: () => (
				<FloatingToolbar>
					<FloatingToolbarButtons />
				</FloatingToolbar>
			),
		},
	}),
];
