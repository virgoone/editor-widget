import type { SlateLeafProps } from "platejs/static";
import { SlateLeaf } from "platejs/static";
import * as React from "react";

export function KbdLeafStatic(props: SlateLeafProps) {
	return (
		<SlateLeaf
			{...props}
			as="kbd"
			className="editor-kbd px-1.5 py-0.5 font-mono text-sm"
		>
			{props.children}
		</SlateLeaf>
	);
}
