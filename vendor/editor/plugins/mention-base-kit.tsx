import { MentionElementStatic } from "@bunship-ai/editor/components/mention-node-static";
import { BaseMentionPlugin } from "@platejs/mention";

export const BaseMentionKit = [
	BaseMentionPlugin.withComponent(MentionElementStatic),
];
