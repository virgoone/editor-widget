import type { EditorNode, EditorValue } from "./types";

const defaultValue: EditorValue = [{ type: "p", children: [{ text: "" }] }];

export function createDefaultValue(): EditorValue {
  return cloneValue(defaultValue);
}

export function cloneValue(value: EditorValue): EditorValue {
  return JSON.parse(JSON.stringify(value)) as EditorValue;
}

function isNode(value: unknown): value is EditorNode {
  return !!value && typeof value === "object";
}

export function normalizeValue(
  input: EditorValue | string | undefined | null,
): EditorValue {
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

  const nodes = input.filter(isNode);
  return nodes.length > 0 ? (nodes as EditorValue) : createDefaultValue();
}
