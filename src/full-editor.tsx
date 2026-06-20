"use client";

import "./editor-theme.css";

import { Editor, EditorContainer } from "@bunship-ai/editor/components/editor";
import { EditorKit } from "@bunship-ai/editor/editor-kit";
import { BlockIdKit } from "@bunship-ai/editor/plugins/block-id-kit";
import { EditorConfigProvider } from "@bunship-ai/editor/lib/editor-config";
import { cn } from "@bunship-ai/ui/lib/utils";
import { normalizeNodeId, type Value } from "platejs";
import { Plate, usePlateEditor } from "platejs/react";
import * as React from "react";
import { Toaster } from "sonner";

import type { EditorApi, EditorOptions } from "./types";
import { cloneValue, normalizeValue } from "./value";

function prepareValue(input: EditorOptions["value"]): Value {
  return normalizeNodeId(normalizeValue(input)) as unknown as Value;
}

function useIsDark(theme: EditorOptions["theme"]): boolean {
  const [systemDark, setSystemDark] = React.useState(false);

  React.useEffect(() => {
    if (theme !== "system" || typeof window === "undefined" || !window.matchMedia)
      return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(media.matches);
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  if (theme === "dark") return true;
  if (theme === "light") return false;
  return systemDark;
}

export function FullEditor({
  value,
  readOnly = false,
  placeholder = "Start writing…",
  className,
  theme = "system",
  stylePreset = "fluxship",
  tokens,
  upload,
  minHeight = 460,
  onChange,
  onReady,
}: EditorOptions) {
  const initialValue = React.useMemo(() => prepareValue(value), []);
  const isDark = useIsDark(theme);

  const editor = usePlateEditor({
    plugins: [...EditorKit, ...BlockIdKit],
    value: initialValue,
  });

  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  const api = React.useMemo<EditorApi>(
    () => ({
      getValue: () => cloneValue(editor.children as never),
      setValue: (next) => {
        editor.tf.setValue(prepareValue(next));
      },
      focus: () => {
        editor.tf.focus();
      },
      destroy: () => {},
    }),
    [editor],
  );

  React.useEffect(() => {
    onReady?.(api);
  }, [api, onReady]);

  const uploadConfig = React.useMemo(
    () => ({
      upload: {
        api: upload?.api,
        urlBase: upload?.urlBase,
        credentials: upload?.credentials ?? "include",
        headers: upload?.headers,
        getHeaders: upload?.getHeaders,
      },
    }),
    [upload],
  );

  const accentStyle = React.useMemo<React.CSSProperties | undefined>(() => {
    if (!tokens?.accent && !tokens?.radius) return undefined;
    return {
      ...(tokens?.accent
        ? ({ "--brand": tokens.accent, "--primary": tokens.accent } as React.CSSProperties)
        : {}),
      ...(tokens?.radius ? ({ "--radius": tokens.radius } as React.CSSProperties) : {}),
    };
  }, [tokens]);

  return (
    <div
      className={cn(
        "bwe-widget-root bg-background text-foreground",
        isDark && "dark",
        className,
      )}
      data-style-preset={stylePreset}
      style={{ minHeight, ...accentStyle }}
    >
      <EditorConfigProvider config={uploadConfig}>
        <Plate
          editor={editor}
          onChange={({ value: next }) => {
            onChangeRef.current?.(next as never);
          }}
        >
          <EditorContainer variant="default" style={{ minHeight }}>
            <Editor
              variant="default"
              readOnly={readOnly}
              placeholder={placeholder}
            />
          </EditorContainer>
        </Plate>
      </EditorConfigProvider>
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

FullEditor.displayName = "FullEditor";
