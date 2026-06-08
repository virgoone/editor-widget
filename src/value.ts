import type { EditorBlock, EditorLeaf, EditorValue } from "./types";

const defaultValue: EditorValue = [
  {
    type: "p",
    children: [{ text: "" }]
  }
];

export function createDefaultValue() {
  return cloneValue(defaultValue);
}

export function cloneValue(value: EditorValue): EditorValue {
  return value.map((block) => ({
    ...block,
    children: block.children.map((leaf) => ({ ...leaf }))
  }));
}

export function normalizeValue(input: EditorValue | string | undefined): EditorValue {
  if (!input) return createDefaultValue();

  if (typeof input === "string") {
    try {
      const parsed = JSON.parse(input) as unknown;
      return normalizeValue(parsed as EditorValue);
    } catch {
      return [{ type: "p", children: [{ text: input }] }];
    }
  }

  if (!Array.isArray(input) || input.length === 0) {
    return createDefaultValue();
  }

  return input.map((block): EditorBlock => {
    const rawBlock = block as Partial<EditorBlock>;
    const type = isBlockType(rawBlock.type) ? rawBlock.type : "p";
    const children = Array.isArray(rawBlock.children)
      ? rawBlock.children.map(normalizeLeaf)
      : [{ text: "" }];

    return {
      ...rawBlock,
      type,
      children
    };
  });
}

export function getBlockText(block: EditorBlock) {
  return block.children.map((leaf) => leaf.text).join("");
}

export function setBlockText(block: EditorBlock, text: string): EditorBlock {
  const firstLeaf = block.children[0] ?? { text: "" };
  return {
    ...block,
    children: [{ ...firstLeaf, text }]
  };
}

export function blockToMarkdown(block: EditorBlock) {
  const text = getBlockText(block);

  switch (block.type) {
    case "h1":
      return `# ${text}`;
    case "h2":
      return `## ${text}`;
    case "h3":
      return `### ${text}`;
    case "blockquote":
      return `> ${text}`;
    case "code_block":
      return `\`\`\`\n${text}\n\`\`\``;
    case "li":
      return `- ${text}`;
    case "ul":
    case "ol":
    case "p":
    default:
      return text;
  }
}

export function valueToMarkdown(value: EditorValue) {
  return value.map(blockToMarkdown).join("\n\n");
}

function normalizeLeaf(input: unknown): EditorLeaf {
  if (!input || typeof input !== "object") {
    return { text: "" };
  }

  const leaf = input as Partial<EditorLeaf>;
  return {
    ...leaf,
    text: typeof leaf.text === "string" ? leaf.text : ""
  };
}

function isBlockType(type: unknown): type is EditorBlock["type"] {
  return (
    type === "p" ||
    type === "h1" ||
    type === "h2" ||
    type === "h3" ||
    type === "blockquote" ||
    type === "code_block" ||
    type === "ul" ||
    type === "ol" ||
    type === "li"
  );
}
