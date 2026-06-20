"use client";

import type { PlateLeafProps } from "platejs/react";
import { PlateLeaf } from "platejs/react";
import * as React from "react";

export function KbdLeaf(props: PlateLeafProps) {
	return (
		<PlateLeaf
			{...props}
			as="kbd"
			className="editor-kbd px-1.5 py-0.5 font-mono text-sm"
		>
			{props.children}
		</PlateLeaf>
	);
}
