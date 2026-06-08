import type { EditorValue } from "./types";
declare class BunshipEditorElement extends HTMLElement {
    static observedAttributes: string[];
    private root;
    private editorApi;
    private mountNode;
    private currentValue;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(): void;
    get value(): EditorValue | string;
    set value(nextValue: EditorValue | string);
    focus(): void;
    private getOptions;
    private render;
}
export declare function defineBunshipEditor(customTagName?: string): void;
export { BunshipEditorElement };
