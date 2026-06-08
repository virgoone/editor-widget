import { BoldIcon, CodeIcon, ItalicIcon, ListPlusIcon, PlusIcon, Trash2Icon, UnderlineIcon } from "lucide-react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject
} from "react";
import { Badge, Button, Select, Textarea } from "./primitives";
import type { EditorApi, EditorBlock, EditorOptions, EditorTokens, EditorValue } from "./types";
import { cloneValue, createDefaultValue, getBlockText, normalizeValue, setBlockText, valueToMarkdown } from "./value";
import "./styles.css";

type BunshipEditorProps = EditorOptions;

const blockOptions: Array<{ label: string; value: EditorBlock["type"] }> = [
  { label: "Paragraph", value: "p" },
  { label: "Heading 1", value: "h1" },
  { label: "Heading 2", value: "h2" },
  { label: "Heading 3", value: "h3" },
  { label: "Quote", value: "blockquote" },
  { label: "Code", value: "code_block" },
  { label: "List item", value: "li" }
];

export const BunshipEditor = forwardRef<EditorApi, BunshipEditorProps>(function BunshipEditor(
  {
    value,
    readOnly = false,
    placeholder = "Start writing...",
    className,
    theme = "system",
    stylePreset = "fluxship",
    tokens,
    onChange,
    onReady
  },
  ref
) {
  const initialValue = useMemo(() => normalizeValue(value), [value]);
  const [editorValue, setEditorValue] = useState<EditorValue>(initialValue);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const firstBlockRef = useRef<HTMLTextAreaElement | null>(null);
  const valueRef = useRef(editorValue);

  useEffect(() => {
    valueRef.current = editorValue;
  }, [editorValue]);

  useEffect(() => {
    setEditorValue(initialValue);
    setSelectedIndex(0);
  }, [initialValue]);

  const api = useMemo<EditorApi>(
    () => ({
      getValue: () => cloneValue(valueRef.current),
      setValue: (nextValue) => {
        const normalized = normalizeValue(nextValue);
        valueRef.current = normalized;
        setEditorValue(normalized);
        onChange?.(cloneValue(normalized));
      },
      focus: () => {
        firstBlockRef.current?.focus();
      },
      destroy: () => {}
    }),
    [onChange]
  );

  useImperativeHandle(ref, () => api, [api]);

  useEffect(() => {
    onReady?.(api);
  }, [api, onReady]);

  function commit(nextValue: EditorValue) {
    const normalized = normalizeValue(nextValue);
    valueRef.current = normalized;
    setEditorValue(normalized);
    onChange?.(cloneValue(normalized));
  }

  function updateBlock(index: number, nextBlock: EditorBlock) {
    commit(editorValue.map((block, blockIndex) => (blockIndex === index ? nextBlock : block)));
  }

  function insertBlock(afterIndex: number) {
    const nextBlock: EditorBlock = { type: "p", children: [{ text: "" }] };
    const nextValue = [...editorValue];
    nextValue.splice(afterIndex + 1, 0, nextBlock);
    commit(nextValue);
    setSelectedIndex(afterIndex + 1);
  }

  function removeBlock(index: number) {
    const nextValue = editorValue.filter((_, blockIndex) => blockIndex !== index);
    commit(nextValue.length > 0 ? nextValue : createDefaultValue());
    setSelectedIndex(Math.max(0, index - 1));
  }

  function setCurrentType(type: EditorBlock["type"]) {
    const block = editorValue[selectedIndex];
    if (!block) return;
    updateBlock(selectedIndex, { ...block, type });
  }

  function toggleMark(mark: "bold" | "italic" | "underline" | "code") {
    const block = editorValue[selectedIndex];
    if (!block) return;

    const leaf = block.children[0] ?? { text: "" };
    updateBlock(selectedIndex, {
      ...block,
      children: [{ ...leaf, [mark]: !leaf[mark] }]
    });
  }

  const currentBlock = editorValue[selectedIndex] ?? editorValue[0];
  const currentLeaf = currentBlock?.children[0];
  const tokenStyle = useMemo(() => tokensToStyle(tokens), [tokens]);

  return (
    <div
      className={`bwe-root bwe-theme-${theme} ${className ?? ""}`.trim()}
      data-style-preset={stylePreset}
      style={tokenStyle}
    >
      <div className="bwe-toolbar" aria-label="Editor toolbar">
        <Select
          value={currentBlock?.type ?? "p"}
          disabled={readOnly}
          onChange={(event) => setCurrentType(event.target.value as EditorBlock["type"])}
          aria-label="Block type"
        >
          {blockOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Button
          className={currentLeaf?.bold ? "is-active" : undefined}
          variant="ghost"
          size="icon"
          disabled={readOnly}
          onClick={() => toggleMark("bold")}
          aria-label="Bold"
          title="Bold"
        >
          <BoldIcon aria-hidden="true" />
        </Button>
        <Button
          className={currentLeaf?.italic ? "is-active" : undefined}
          variant="ghost"
          size="icon"
          disabled={readOnly}
          onClick={() => toggleMark("italic")}
          aria-label="Italic"
          title="Italic"
        >
          <ItalicIcon aria-hidden="true" />
        </Button>
        <Button
          className={currentLeaf?.underline ? "is-active" : undefined}
          variant="ghost"
          size="icon"
          disabled={readOnly}
          onClick={() => toggleMark("underline")}
          aria-label="Underline"
          title="Underline"
        >
          <UnderlineIcon aria-hidden="true" />
        </Button>
        <Button
          className={currentLeaf?.code ? "is-active" : undefined}
          variant="ghost"
          size="icon"
          disabled={readOnly}
          onClick={() => toggleMark("code")}
          aria-label="Code"
          title="Code"
        >
          <CodeIcon aria-hidden="true" />
        </Button>
        <Button
          variant="secondary"
          disabled={readOnly}
          onClick={() => insertBlock(selectedIndex)}
        >
          <ListPlusIcon aria-hidden="true" />
          Add block
        </Button>
      </div>

      <div className="bwe-surface">
        {editorValue.map((block, index) => (
          <EditorBlockView
            key={`${block.id ?? "block"}-${index}`}
            block={block}
            index={index}
            readOnly={readOnly}
            placeholder={placeholder}
            selected={selectedIndex === index}
            inputRef={index === 0 ? firstBlockRef : undefined}
            onFocus={() => setSelectedIndex(index)}
            onChange={(text) => updateBlock(index, setBlockText(block, text))}
            onInsert={() => insertBlock(index)}
            onRemove={() => removeBlock(index)}
          />
        ))}
      </div>

      <details className="bwe-json">
        <summary>JSON value</summary>
        <pre>{JSON.stringify(editorValue, null, 2)}</pre>
      </details>
      <details className="bwe-json">
        <summary>Markdown preview</summary>
        <pre>{valueToMarkdown(editorValue)}</pre>
      </details>
    </div>
  );
});

type EditorBlockViewProps = {
  block: EditorBlock;
  index: number;
  readOnly: boolean;
  placeholder: string;
  selected: boolean;
  inputRef?: RefObject<HTMLTextAreaElement | null>;
  onFocus: () => void;
  onChange: (text: string) => void;
  onInsert: () => void;
  onRemove: () => void;
};

function EditorBlockView({
  block,
  index,
  readOnly,
  placeholder,
  selected,
  inputRef,
  onFocus,
  onChange,
  onInsert,
  onRemove
}: EditorBlockViewProps) {
  const text = getBlockText(block);
  const tagLabel = block.type.replace("_", " ");

  return (
    <section className={selected ? "bwe-block is-selected" : "bwe-block"}>
      <div className="bwe-block-gutter">
        <Badge>{tagLabel}</Badge>
        <Button variant="ghost" size="icon" disabled={readOnly} onClick={onInsert} aria-label="Insert block after" title="Insert block after">
          <PlusIcon aria-hidden="true" />
        </Button>
        <Button variant="ghost" size="icon" disabled={readOnly} onClick={onRemove} aria-label="Remove block" title="Remove block">
          <Trash2Icon aria-hidden="true" />
        </Button>
      </div>
      <Textarea
        ref={inputRef}
        className={`bwe-input-${block.type}`}
        value={text}
        readOnly={readOnly}
        placeholder={index === 0 ? placeholder : ""}
        rows={block.type === "code_block" ? 5 : 2}
        onFocus={onFocus}
        onChange={(event) => onChange(event.target.value)}
      />
    </section>
  );
}

function tokensToStyle(tokens?: EditorTokens): CSSProperties | undefined {
  if (!tokens) return undefined;

  return {
    "--bwe-accent": tokens.accent,
    "--bwe-radius": tokens.radius,
    "--bwe-font-family": tokens.fontFamily,
    "--bwe-border-width": tokens.borderWidth,
    "--bwe-shadow": tokens.shadow
  } as CSSProperties;
}
