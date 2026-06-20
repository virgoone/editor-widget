"use client";

import { AudioElement } from "@bunship-ai/editor/components/media-audio-node";
import { MediaEmbedElement } from "@bunship-ai/editor/components/media-embed-node";
import { FileElement } from "@bunship-ai/editor/components/media-file-node";
import { ImageElement } from "@bunship-ai/editor/components/media-image-node";
import { PlaceholderElement } from "@bunship-ai/editor/components/media-placeholder-node";
import { MediaPreviewDialog } from "@bunship-ai/editor/components/media-preview-dialog";
import { MediaUploadToast } from "@bunship-ai/editor/components/media-upload-toast";
import { VideoElement } from "@bunship-ai/editor/components/media-video-node";
import { CaptionPlugin } from "@platejs/caption/react";
import {
	AudioPlugin,
	FilePlugin,
	ImagePlugin,
	MediaEmbedPlugin,
	PlaceholderPlugin,
	VideoPlugin,
} from "@platejs/media/react";
import { KEYS } from "platejs";

export const MediaKit = [
	ImagePlugin.configure({
		options: { disableUploadInsert: true },
		render: { afterEditable: MediaPreviewDialog, node: ImageElement },
	}),
	MediaEmbedPlugin.withComponent(MediaEmbedElement),
	VideoPlugin.withComponent(VideoElement),
	AudioPlugin.withComponent(AudioElement),
	FilePlugin.withComponent(FileElement),
	PlaceholderPlugin.configure({
		options: { disableEmptyPlaceholder: true },
		render: { afterEditable: MediaUploadToast, node: PlaceholderElement },
	}),
	CaptionPlugin.configure({
		options: {
			query: {
				allow: [KEYS.img, KEYS.video, KEYS.audio, KEYS.file, KEYS.mediaEmbed],
			},
		},
	}),
];
