import { BlockListStatic } from "@bunship-ai/editor/components/block-list-static";
import { BaseIndentKit } from "@bunship-ai/editor/plugins/indent-base-kit";
import { BaseListPlugin } from "@platejs/list";
import { KEYS } from "platejs";

export const BaseListKit = [
	...BaseIndentKit,
	BaseListPlugin.configure({
		inject: {
			targetPlugins: [
				...KEYS.heading,
				KEYS.p,
				KEYS.blockquote,
				KEYS.codeBlock,
				KEYS.toggle,
			],
		},
		render: {
			belowNodes: BlockListStatic,
		},
	}),
];
