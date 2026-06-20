"use client";

import { BlockContextMenu } from "@bunship-ai/editor/components/block-context-menu";
import { BlockSelectionKit } from "@bunship-ai/editor/plugins/block-selection-kit";
import { BlockMenuPlugin } from "@platejs/selection/react";

export const BlockMenuKit = [
	...BlockSelectionKit,
	BlockMenuPlugin.configure({
		render: { aboveEditable: BlockContextMenu },
	}),
];
