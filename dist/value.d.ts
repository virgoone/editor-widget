import type { EditorBlock, EditorValue } from "./types";
export declare function createDefaultValue(): EditorValue;
export declare function cloneValue(value: EditorValue): EditorValue;
export declare function normalizeValue(input: EditorValue | string | undefined): EditorValue;
export declare function getBlockText(block: EditorBlock): string;
export declare function setBlockText(block: EditorBlock, text: string): EditorBlock;
export declare function blockToMarkdown(block: EditorBlock): string;
export declare function valueToMarkdown(value: EditorValue): string;
