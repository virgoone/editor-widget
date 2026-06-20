"use client";

import type { PlateLeafProps } from "platejs/react";
import { PlateLeaf } from "platejs/react";
import * as React from "react";

export function CodeLeaf(props: PlateLeafProps) {
	return (
		<PlateLeaf
			{...props}
			as="code"
			className="editor-inline-code whitespace-pre-wrap px-[0.3em] py-[0.2em] font-mono text-sm"
		>
			{props.children}
		</PlateLeaf>
	);
}
