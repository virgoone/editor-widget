"use client";

import {
	ColumnElement,
	ColumnGroupElement,
} from "@bunship-ai/editor/components/column-node";
import { ColumnItemPlugin, ColumnPlugin } from "@platejs/layout/react";

export const ColumnKit = [
	ColumnPlugin.withComponent(ColumnGroupElement),
	ColumnItemPlugin.withComponent(ColumnElement),
];
