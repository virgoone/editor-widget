"use client";

import { FixedToolbar } from "@bunship-ai/editor/components/fixed-toolbar";
import { FixedToolbarButtons } from "@bunship-ai/editor/components/fixed-toolbar-buttons";
import { createPlatePlugin } from "platejs/react";

export const FixedToolbarKit = [
	createPlatePlugin({
		key: "fixed-toolbar",
		render: {
			beforeEditable: () => (
				<FixedToolbar>
					<FixedToolbarButtons />
				</FixedToolbar>
			),
		},
	}),
];
