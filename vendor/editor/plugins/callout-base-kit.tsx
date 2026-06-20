import { CalloutElementStatic } from "@bunship-ai/editor/components/callout-node-static";
import { BaseCalloutPlugin } from "@platejs/callout";

export const BaseCalloutKit = [
	BaseCalloutPlugin.withComponent(CalloutElementStatic),
];
