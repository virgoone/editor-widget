export type EditorNode = {
  type?: string;
  id?: string;
  blockId?: string;
  children?: EditorNode[];
  text?: string;
  [key: string]: unknown;
};

export type EditorValue = EditorNode[];

/** Kept for backwards compatibility with the 0.1.x lightweight widget API. */
export type EditorLeaf = EditorNode;
export type EditorBlock = EditorNode;

export type UploadConfig = {
  /** Better Upload API endpoint, e.g. `/api/media/upload`. */
  api?: string;
  /** Base used to resolve the stored object URL, e.g. `/api/media/object`. */
  urlBase?: string;
  /** Better Upload route name. @default 'commons' */
  route?: string;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  getHeaders?: () => HeadersInit | Promise<HeadersInit>;
};

export type AIConfig = {
  apiBaseUrl?: string;
  commandApi?: string;
  copilotApi?: string;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  getHeaders?: () => HeadersInit | Promise<HeadersInit>;
};

export type EditorTheme = "light" | "dark" | "system";
export type EditorStylePreset = "fluxship" | "shadcn" | "minimal";

export type EditorTokens = {
  accent?: string;
  radius?: string;
  fontFamily?: string;
  borderWidth?: string;
  shadow?: string;
};

export type EditorOptions = {
  value?: EditorValue | string;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
  theme?: EditorTheme;
  stylePreset?: EditorStylePreset;
  tokens?: EditorTokens;
  upload?: UploadConfig;
  ai?: AIConfig;
  minHeight?: number;
  onChange?: (value: EditorValue) => void;
  onReady?: (api: EditorApi) => void;
};

export type EditorApi = {
  getValue: () => EditorValue;
  setValue: (value: EditorValue | string) => void;
  focus: () => void;
  destroy: () => void;
};

export type MountedEditor = EditorApi;
