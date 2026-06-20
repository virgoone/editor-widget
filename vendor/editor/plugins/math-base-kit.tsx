import {
	EquationElementStatic,
	InlineEquationElementStatic,
} from "@bunship-ai/editor/components/equation-node-static";
import { BaseEquationPlugin, BaseInlineEquationPlugin } from "@platejs/math";

export const BaseMathKit = [
	BaseInlineEquationPlugin.withComponent(InlineEquationElementStatic),
	BaseEquationPlugin.withComponent(EquationElementStatic),
];
