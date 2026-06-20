import { CommentLeafStatic } from "@bunship-ai/editor/components/comment-node-static";
import { BaseCommentPlugin } from "@platejs/comment";

export const BaseCommentKit = [
	BaseCommentPlugin.withComponent(CommentLeafStatic),
];
