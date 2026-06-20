import {
	CodeBlockElementStatic,
	CodeLineElementStatic,
	CodeSyntaxLeafStatic,
} from "@bunship-ai/editor/components/code-block-node-static";
import {
	BaseCodeBlockPlugin,
	BaseCodeLinePlugin,
	BaseCodeSyntaxPlugin,
} from "@platejs/code-block";
import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);

export const BaseCodeBlockKit = [
	BaseCodeBlockPlugin.configure({
		node: { component: CodeBlockElementStatic },
		options: { lowlight },
	}),
	BaseCodeLinePlugin.withComponent(CodeLineElementStatic),
	BaseCodeSyntaxPlugin.withComponent(CodeSyntaxLeafStatic),
];
