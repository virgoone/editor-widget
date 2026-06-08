export type EditorLeaf = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  [key: string]: unknown;
};

export type EditorBlock = {
  id?: string;
  type: "p" | "h1" | "h2" | "h3" | "blockquote" | "code_block" | "ul" | "ol" | "li";
  children: EditorLeaf[];
  [key: string]: unknown;
};

export type EditorValue = EditorBlock[];

export type UploadConfig = {
  api?: string;
  urlBase?: string;
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
