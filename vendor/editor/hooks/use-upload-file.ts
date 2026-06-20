import {
	type FileUploadInfo,
	type UploadStatus,
	uploadFile as uploadSingleFile,
} from "@better-upload/client";
import * as React from "react";
import { toast } from "sonner";

import { useUploadConfigWithOverrides } from "../lib/editor-config";

function toHeaderObject(headers?: HeadersInit): Record<string, string> {
	if (!headers) return {};

	const parsed: Record<string, string> = {};
	new Headers(headers).forEach((value, key) => {
		parsed[key] = value;
	});
	return parsed;
}

function joinUrl(base: string | undefined, key: string) {
	const normalizedKey = key.replace(/^\/+/, "");
	if (!base) return normalizedKey;
	return `${base.replace(/\/+$/, "")}/${normalizedKey}`;
}

type BetterUploadedFile = Awaited<ReturnType<typeof uploadSingleFile>>["file"];

/**
 * 上传完成的文件信息
 */
export interface UploadedFile<T = unknown> {
	key: string;
	url: string;
	name: string;
	size: number;
	type: string;
	appUrl?: string;
	customData?: T;
}

/**
 * useUploadFile Hook 配置
 */
interface UseUploadFileProps {
	/**
	 * 上传开始回调
	 */
	onUploadBegin?: (file: File) => void;

	/**
	 * 上传进度回调
	 */
	onUploadProgress?: (progress: number) => void;

	/**
	 * 上传完成回调
	 */
	onUploadComplete?: (file: UploadedFile) => void;

	/**
	 * 上传错误回调
	 */
	onUploadError?: (error: unknown) => void;

	/**
	 * 自定义请求头
	 */
	headers?: HeadersInit;

	/**
	 * 动态生成上传请求头，适用于 token 可能在页面停留后更新的场景
	 */
	getHeaders?: () => HeadersInit | Promise<HeadersInit>;

	/**
	 * Better Upload 路由名称
	 * @default 'commons'
	 */
	route?: string;

	/**
	 * Better Upload API 端点覆盖
	 * 如果不提供，将使用全局配置或环境变量
	 */
	api?: string;

	/**
	 * 请求凭证模式
	 */
	credentials?: RequestCredentials;

	/**
	 * 重试次数
	 */
	retry?: number;

	/**
	 * 重试延迟（毫秒）
	 */
	retryDelay?: number;
}

function toUploadedFile(
	fileData: BetterUploadedFile,
	urlBase?: string,
): UploadedFile {
	// 兼容旧版 better-upload 与自定义 server metadata：标准 `FileUploadInfo`
	// 只暴露 `objectInfo`，但部分实现会在顶层透出 `key` / `url` / `customData`。
	const raw = fileData as BetterUploadedFile & {
		key?: string;
		url?: string;
		customData?: unknown;
	};
	const fileKey = raw.objectInfo?.key || raw.key || "";
	const url = raw.url || joinUrl(urlBase, fileKey);

	return {
		key: fileKey,
		url,
		name: raw.name || "",
		size: raw.size || 0,
		type: raw.type || "",
		appUrl: url,
		customData: raw.customData || raw.objectInfo?.metadata,
	};
}

/**
 * 文件上传 Hook
 *
 * 使用 Better Upload 实现单文件上传，支持进度追踪和错误处理
 */
export function useUploadFile({
	onUploadComplete,
	onUploadError,
	onUploadBegin,
	onUploadProgress,
	route = "commons",
	api: apiOverride,
	headers,
	getHeaders,
	credentials,
	retry,
	retryDelay,
}: UseUploadFileProps = {}) {
	const [uploadedFile, setUploadedFile] = React.useState<UploadedFile>();
	const [uploadingFile, setUploadingFile] = React.useState<File>();
	const [currentProgress, setCurrentProgress] = React.useState<number>(0);
	const [isPending, setIsPending] = React.useState(false);
	const [error, setError] = React.useState<unknown>(undefined);

	const config = useUploadConfigWithOverrides({
		api: apiOverride,
		headers,
		getHeaders,
		credentials,
		retry,
		retryDelay,
	});

	const resolveHeaders = React.useCallback(async (): Promise<HeadersInit> => {
		const baseHeaders = toHeaderObject(config.headers);
		const latestHeaders = config.getHeaders
			? await config.getHeaders()
			: undefined;
		const dynamicHeaders = toHeaderObject(latestHeaders);
		return {
			...baseHeaders,
			...dynamicHeaders,
		};
	}, [config.headers, config.getHeaders]);

	const uploadFile = React.useCallback(
		async (file: File): Promise<UploadedFile | undefined> => {
			setUploadedFile(undefined);
			setCurrentProgress(0);
			setUploadingFile(file);
			setError(undefined);
			setIsPending(true);
			onUploadBegin?.(file);

			try {
				const authHeaders = await resolveHeaders();
				const result = await uploadSingleFile({
					route,
					api: config.api,
					file,
					headers: authHeaders,
					credentials: config.credentials,
					retry: config.retry,
					retryDelay: config.retryDelay,
					onFileStateChange: ({
						file: fileState,
					}: {
						file: FileUploadInfo<UploadStatus>;
					}) => {
						const progress = Math.round((fileState.progress || 0) * 100);
						setCurrentProgress(progress);
						onUploadProgress?.(progress);
					},
				});

				const nextUploadedFile = toUploadedFile(result.file, config.urlBase);
				setUploadedFile(nextUploadedFile);
				onUploadComplete?.(nextUploadedFile);
				return nextUploadedFile;
			} catch (error) {
				setError(error);
				setUploadingFile(undefined);
				onUploadError?.(error);
				toast.error(getErrorMessage(error));
				return undefined;
			} finally {
				setIsPending(false);
			}
		},
		[
			route,
			config.api,
			config.credentials,
			config.retry,
			config.retryDelay,
			config.urlBase,
			resolveHeaders,
			onUploadBegin,
			onUploadProgress,
			onUploadComplete,
			onUploadError,
		],
	);

	return {
		isUploading: isPending,
		progress: currentProgress,
		uploadedFile,
		uploadFile,
		uploadingFile,
		error,
	};
}

/**
 * 从错误对象中提取错误消息
 *
 * @param err - 错误对象
 * @returns 错误消息字符串
 */
export function getErrorMessage(err: unknown): string {
	const unknownError = "Something went wrong, please try again later.";

	if (err instanceof Error) {
		return err.message;
	}

	if (typeof err === "string") {
		return err;
	}

	if (err && typeof err === "object" && "message" in err) {
		const message = (err as { message?: unknown }).message;
		if (typeof message === "string" && message.length > 0) {
			return message;
		}
	}

	return unknownError;
}

/**
 * 显示错误 Toast 提示
 *
 * @param err - 错误对象
 * @returns Toast ID
 */
export function showErrorToast(err: unknown) {
	return toast.error(getErrorMessage(err));
}
