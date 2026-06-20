import { SuggestionLeafStatic } from "@bunship-ai/editor/components/suggestion-node-static";
import { BaseSuggestionPlugin } from "@platejs/suggestion";

export const BaseSuggestionKit = [
	BaseSuggestionPlugin.withComponent(SuggestionLeafStatic),
];
