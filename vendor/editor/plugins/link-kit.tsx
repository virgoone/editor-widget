"use client";

import { LinkElement } from "@bunship-ai/editor/components/link-node";
import { LinkFloatingToolbar } from "@bunship-ai/editor/components/link-toolbar";
import { LinkPlugin } from "@platejs/link/react";

export const LinkKit = [
	LinkPlugin.configure({
		render: {
			node: LinkElement,
			afterEditable: () => <LinkFloatingToolbar />,
		},
	}),
];
