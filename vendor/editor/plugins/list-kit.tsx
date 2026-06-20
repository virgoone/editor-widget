"use client";

import { BlockList } from "@bunship-ai/editor/components/block-list";
import { IndentKit } from "@bunship-ai/editor/plugins/indent-kit";
import { ListPlugin } from "@platejs/list/react";
import { KEYS } from "platejs";

export const ListKit = [
	...IndentKit,
	ListPlugin.configure({
		inject: {
			targetPlugins: [
				...KEYS.heading,
				KEYS.p,
				KEYS.blockquote,
				KEYS.codeBlock,
				KEYS.toggle,
				KEYS.img,
			],
		},
		render: {
			belowNodes: BlockList,
		},
	}),
];
