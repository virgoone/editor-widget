"use client";

import { cn } from "@bunship-ai/ui/lib/utils";
import {
	PlaceholderPlugin,
	PlaceholderProvider,
	updateUploadHistory,
} from "@platejs/media/react";
import { AudioLines, FileUp, Film, ImageIcon, Loader2Icon } from "lucide-react";
import type { TPlaceholderElement } from "platejs";
import { KEYS } from "platejs";
import type { PlateElementProps } from "platejs/react";
import { PlateElement, useEditorPlugin, withHOC } from "platejs/react";
import * as React from "react";
import { useFilePicker } from "use-file-picker";
import { useUploadFile } from "../hooks/use-upload-file";

const CONTENT: Record<
	string,
	{
		accept: string[];
		content: React.ReactNode;
		icon: React.ReactNode;
	}
> = {
	[KEYS.audio]: {
		accept: ["audio/*"],
		content: "Add an audio file",
		icon: <AudioLines />,
	},
	[KEYS.file]: {
		accept: ["*"],
		content: "Add a file",
		icon: <FileUp />,
	},
	[KEYS.img]: {
		accept: ["image/*"],
		content: "Add an image",
		icon: <ImageIcon />,
	},
	[KEYS.video]: {
		accept: ["video/*"],
		content: "Add a video",
		icon: <Film />,
	},
};

export const PlaceholderElement = withHOC(
	PlaceholderProvider,
	function PlaceholderElement(props: PlateElementProps<TPlaceholderElement>) {
		const { editor, element } = props;
		const mediaType = element.mediaType;
		const placeholderId = element.id as string;

		const { api } = useEditorPlugin(PlaceholderPlugin);

		const { isUploading, progress, uploadedFile, uploadFile, uploadingFile } =
			useUploadFile();

		const loading = isUploading && uploadingFile;

		const currentContent = CONTENT[mediaType];

		const isImage = mediaType === KEYS.img;

		const imageRef = React.useRef<HTMLImageElement>(null);

		const { openFilePicker } = useFilePicker({
			accept: currentContent?.accept ?? [],
			multiple: true,
			onFilesSelected: ({ plainFiles: updatedFiles }) => {
				const firstFile = updatedFiles[0];
				const restFiles = updatedFiles.slice(1);
				if (!firstFile) return;

				replaceCurrentPlaceholder(firstFile);

				if (restFiles.length > 0) {
					editor.getTransforms(PlaceholderPlugin).insert.media(restFiles);
				}
			},
		});

		const replaceCurrentPlaceholder = React.useCallback(
			(file: File) => {
				api.placeholder.addUploadingFile(placeholderId, file);
				void uploadFile(file).then((uploaded) => {
					if (!uploaded) {
						api.placeholder.removeUploadingFile(placeholderId);
					}
				});
			},
			[api.placeholder, placeholderId, uploadFile],
		);

		// `editor` / `element` 在 Plate 渲染中引用不稳定，但本 effect 只在
		// `uploadedFile` 真正变化时需要执行；因此用 ref 持有最新值并仅以
		// `uploadedFile` / `placeholderId` 触发一次替换。
		const editorRef = React.useRef(editor);
		editorRef.current = editor;
		const elementRef = React.useRef(element);
		elementRef.current = element;
		const apiRef = React.useRef(api.placeholder);
		apiRef.current = api.placeholder;

		React.useEffect(() => {
			if (!uploadedFile || !mediaType) return;

			const currentEditor = editorRef.current;
			const path = currentEditor.api.findPath(elementRef.current);
			if (!path) {
				apiRef.current.removeUploadingFile(placeholderId);
				return;
			}

			currentEditor.tf.withoutSaving(() => {
				currentEditor.tf.removeNodes({ at: path });

				const node = {
					children: [{ text: "" }],
					initialHeight: imageRef.current?.height,
					initialWidth: imageRef.current?.width,
					isUpload: true,
					name: mediaType === KEYS.file ? uploadedFile.name : "",
					placeholderId,
					type: mediaType,
					url: uploadedFile.url,
				};

				currentEditor.tf.insertNodes(node, { at: path });

				updateUploadHistory(currentEditor, node);
			});

			apiRef.current.removeUploadingFile(placeholderId);
		}, [mediaType, placeholderId, uploadedFile]);

		// React dev mode will call React.useEffect twice
		const isReplaced = React.useRef(false);

		/** Paste and drop */
		React.useEffect(() => {
			if (isReplaced.current) return;

			isReplaced.current = true;
			const currentFiles = api.placeholder.getUploadingFile(placeholderId);

			if (!currentFiles) return;

			replaceCurrentPlaceholder(currentFiles);
		}, [api.placeholder, placeholderId, replaceCurrentPlaceholder]);

		return (
			<PlateElement className="my-1" {...props}>
				{(!loading || !isImage) && (
					<button
						type="button"
						className={cn(
							"flex cursor-pointer select-none items-center rounded-sm bg-muted p-3 pr-9 hover:bg-primary/10",
							loading && "cursor-default hover:bg-muted",
						)}
						onClick={() => openFilePicker()}
						disabled={Boolean(loading)}
						contentEditable={false}
					>
						<div className="relative mr-3 flex text-muted-foreground/80 [&_svg]:size-6">
							{currentContent?.icon}
						</div>
						<div className="whitespace-nowrap text-muted-foreground text-sm">
							<div>
								{loading ? uploadingFile?.name : currentContent?.content}
							</div>

							{loading && !isImage && (
								<div className="mt-1 flex items-center gap-1.5">
									<div>{formatBytes(uploadingFile?.size ?? 0)}</div>
									<div>–</div>
									<div className="flex items-center">
										<Loader2Icon className="mr-1 size-3.5 animate-spin text-muted-foreground" />
										{progress ?? 0}%
									</div>
								</div>
							)}
						</div>
					</button>
				)}

				{isImage && loading && (
					<ImageProgress
						file={uploadingFile}
						imageRef={imageRef}
						progress={progress}
					/>
				)}

				{props.children}
			</PlateElement>
		);
	},
);

export function ImageProgress({
	className,
	file,
	imageRef,
	progress = 0,
}: {
	file: File;
	className?: string;
	imageRef?: React.RefObject<HTMLImageElement | null>;
	progress?: number;
}) {
	const [objectUrl, setObjectUrl] = React.useState<string | null>(null);

	React.useEffect(() => {
		const url = URL.createObjectURL(file);
		setObjectUrl(url);

		return () => {
			URL.revokeObjectURL(url);
		};
	}, [file]);

	if (!objectUrl) {
		return null;
	}

	return (
		<div className={cn("relative", className)} contentEditable={false}>
			<img
				ref={imageRef}
				className="h-auto w-full rounded-sm object-cover"
				alt={file.name}
				src={objectUrl}
			/>
			{progress < 100 && (
				<div className="absolute right-1 bottom-1 flex items-center space-x-2 rounded-full bg-black/50 px-1 py-0.5">
					<Loader2Icon className="size-3.5 animate-spin text-muted-foreground" />
					<span className="font-medium text-white text-xs">
						{Math.round(progress)}%
					</span>
				</div>
			)}
		</div>
	);
}

function formatBytes(
	bytes: number,
	opts: {
		decimals?: number;
		sizeType?: "accurate" | "normal";
	} = {},
) {
	const { decimals = 0, sizeType = "normal" } = opts;

	const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];

	if (bytes === 0) return "0 Byte";

	const i = Math.floor(Math.log(bytes) / Math.log(1024));

	return `${(bytes / 1024 ** i).toFixed(decimals)} ${
		sizeType === "accurate"
			? (accurateSizes[i] ?? "Bytest")
			: (sizes[i] ?? "Bytes")
	}`;
}
