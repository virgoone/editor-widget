"use client";

import * as React from "react";

/**
 * Better Upload 配置接口
 */
export interface UploadConfig {
	/**
	 * Better Upload API 端点
	 * @default '/api/upload'
	 */
	api?: string;

	/**
	 * Base URL
	 * @default ''
	 */
	urlBase?: string;

	/**
	 * 批量上传时的批次大小
	 * @default undefined (所有文件一次上传)
	 */
	uploadBatchSize?: number;

	/**
	 * 分片上传时的批次大小
	 * @default undefined (所有分片一次上传)
	 */
	multipartBatchSize?: number;

	/**
	 * 请求重试次数
	 * @default 0
	 */
	retry?: number;

	/**
	 * 重试延迟时间（毫秒）
	 * @default 0
	 */
	retryDelay?: number;

	/**
	 * 自定义请求头
	 */
	headers?: HeadersInit;

	/**
	 * 动态生成上传请求头，适用于需要异步获取 token 的场景
	 */
	getHeaders?: () => HeadersInit | Promise<HeadersInit>;

	/**
	 * 请求凭证模式
	 */
	credentials?: RequestCredentials;
}

/**
 * AI 配置接口
 */
export interface AIConfig {
	/**
	 * AI Command API 端点
	 * @default '/api/ai/command'
	 */
	commandApi?: string;

	/**
	 * AI Copilot API 端点
	 * @default '/api/ai/copilot'
	 */
	copilotApi?: string;

	/**
	 * API 基础 URL
	 * @default ''
	 */
	apiBaseUrl?: string;

	/**
	 * 自定义 AI 请求头
	 */
	headers?: HeadersInit;

	/**
	 * 动态生成 AI 请求头，适用于需要异步获取 token 的场景
	 */
	getHeaders?: () => HeadersInit | Promise<HeadersInit>;

	/**
	 * AI 请求凭证模式
	 * @default 'include'
	 */
	credentials?: RequestCredentials;
}

/**
 * Editor 完整配置接口
 */
export interface EditorConfig {
	/**
	 * 上传相关配置
	 */
	upload?: UploadConfig;

	/**
	 * AI 相关配置
	 */
	ai?: AIConfig;
}

/**
 * 默认 Upload 配置
 */
const defaultUploadConfig: UploadConfig = {
	api: process.env.PUBLIC_UPLOAD_API_URL || "/api/upload",
	retry: 0,
	retryDelay: 0,
	urlBase: "",
};

/**
 * 默认 AI 配置
 */
const defaultAIConfig: AIConfig = {
	commandApi: "/api/ai/command",
	copilotApi: "/api/ai/copilot",
	apiBaseUrl: "",
	credentials: "include",
};

/**
 * 默认 Editor 配置
 */
const defaultEditorConfig: EditorConfig = {
	upload: defaultUploadConfig,
	ai: defaultAIConfig,
};

/**
 * Editor Config Context
 */
const EditorConfigContext =
	React.createContext<EditorConfig>(defaultEditorConfig);

/**
 * Editor Config Provider Props
 */
export interface EditorConfigProviderProps {
	children: React.ReactNode;
	config?: Partial<EditorConfig>;
}

/**
 * Editor Config Provider
 *
 * 提供统一的编辑器配置，包括上传和 AI 相关配置
 *
 * @example
 * ```tsx
 * <EditorConfigProvider config={{
 *   upload: { api: 'https://api.example.com/upload' },
 *   ai: { apiBaseUrl: 'https://api.example.com' }
 * }}>
 *   <PlateEditor />
 * </EditorConfigProvider>
 * ```
 */
export function EditorConfigProvider({
	children,
	config,
}: EditorConfigProviderProps) {
	const mergedConfig = React.useMemo(
		() => ({
			upload: {
				...defaultUploadConfig,
				...config?.upload,
			},
			ai: {
				...defaultAIConfig,
				...config?.ai,
			},
		}),
		[config],
	);

	return (
		<EditorConfigContext.Provider value={mergedConfig}>
			{children}
		</EditorConfigContext.Provider>
	);
}

/**
 * Hook to access editor configuration
 *
 * @returns The current editor configuration
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const config = useEditorConfig();
 *   console.log('AI API URL:', config.ai.apiBaseUrl);
 * }
 * ```
 */
export function useEditorConfig(): EditorConfig {
	const context = React.useContext(EditorConfigContext);
	return context || defaultEditorConfig;
}

/**
 * Hook to access upload configuration
 *
 * @returns The current upload configuration
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const uploadConfig = useUploadConfig();
 *   console.log('Upload API:', uploadConfig.api);
 * }
 * ```
 */
export function useUploadConfig(): UploadConfig {
	const editorConfig = useEditorConfig();
	return editorConfig.upload || defaultUploadConfig;
}

/**
 * Hook to get upload configuration with optional overrides
 *
 * @param overrides - Optional configuration overrides
 * @returns Merged upload configuration
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const config = useUploadConfigWithOverrides({ retry: 3 });
 * }
 * ```
 */
export function useUploadConfigWithOverrides(
	overrides?: Partial<UploadConfig>,
): UploadConfig {
	const baseConfig = useUploadConfig();

	return React.useMemo(() => {
		if (!overrides) return baseConfig;

		// 过滤掉 undefined 的值，避免覆盖 baseConfig
		const filteredOverrides: Partial<UploadConfig> = {};

		for (const key in overrides) {
			const value = overrides[key as keyof UploadConfig];
			if (value !== undefined) {
				(filteredOverrides as any)[key] = value;
			}
		}

		return {
			...baseConfig,
			...filteredOverrides,
		};
	}, [baseConfig, overrides]);
}

/**
 * Hook to access AI configuration
 *
 * @returns The current AI configuration
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const aiConfig = useAIConfig();
 *   console.log('Command API:', aiConfig.commandApi);
 * }
 * ```
 */
export function useAIConfig(): AIConfig {
	const editorConfig = useEditorConfig();
	return editorConfig.ai || defaultAIConfig;
}

/**
 * Hook to get full AI API URL
 *
 * @param endpoint - The API endpoint ('command' or 'copilot')
 * @returns Full API URL
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const commandUrl = useAIApiUrl('command');
 *   // Returns: 'https://api.example.com/api/ai/command'
 * }
 * ```
 */
export function useAIApiUrl(endpoint: "command" | "copilot"): string {
	const aiConfig = useAIConfig();

	return React.useMemo(() => {
		const apiPath =
			endpoint === "command" ? aiConfig.commandApi : aiConfig.copilotApi;
		const baseUrl = aiConfig.apiBaseUrl || "";

		// 如果 baseUrl 为空或 apiPath 已经是完整 URL，直接返回 apiPath
		if (
			!baseUrl ||
			apiPath?.startsWith("http://") ||
			apiPath?.startsWith("https://")
		) {
			return apiPath || "";
		}

		// 合并 baseUrl 和 apiPath
		return `${baseUrl}${apiPath}`;
	}, [aiConfig, endpoint]);
}
