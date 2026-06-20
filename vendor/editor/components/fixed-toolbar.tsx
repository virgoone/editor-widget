"use client";

import { cn } from "@bunship-ai/ui/lib/utils";

import { Toolbar } from "./toolbar";

export function FixedToolbar(props: React.ComponentProps<typeof Toolbar>) {
	return (
		<Toolbar
			{...props}
			className={cn(
				"scrollbar-hide sticky top-0 left-0 z-50 w-full flex-wrap items-center gap-0.5 border-b border-b-border bg-secondary p-1",
				props.className,
			)}
		/>
	);
}
