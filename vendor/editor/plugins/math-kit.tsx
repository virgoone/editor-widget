"use client";

import {
	EquationElement,
	InlineEquationElement,
} from "@bunship-ai/editor/components/equation-node";
import { EquationPlugin, InlineEquationPlugin } from "@platejs/math/react";

export const MathKit = [
	InlineEquationPlugin.withComponent(InlineEquationElement),
	EquationPlugin.withComponent(EquationElement),
];
