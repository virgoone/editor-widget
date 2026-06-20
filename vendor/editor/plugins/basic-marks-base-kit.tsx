import { CodeLeafStatic } from "@bunship-ai/editor/components/code-node-static";
import { HighlightLeafStatic } from "@bunship-ai/editor/components/highlight-node-static";
import { KbdLeafStatic } from "@bunship-ai/editor/components/kbd-node-static";
import {
	BaseBoldPlugin,
	BaseCodePlugin,
	BaseHighlightPlugin,
	BaseItalicPlugin,
	BaseKbdPlugin,
	BaseStrikethroughPlugin,
	BaseSubscriptPlugin,
	BaseSuperscriptPlugin,
	BaseUnderlinePlugin,
} from "@platejs/basic-nodes";

export const BaseBasicMarksKit = [
	BaseBoldPlugin,
	BaseItalicPlugin,
	BaseUnderlinePlugin,
	BaseCodePlugin.withComponent(CodeLeafStatic),
	BaseStrikethroughPlugin,
	BaseSubscriptPlugin,
	BaseSuperscriptPlugin,
	BaseHighlightPlugin.withComponent(HighlightLeafStatic),
	BaseKbdPlugin.withComponent(KbdLeafStatic),
];
