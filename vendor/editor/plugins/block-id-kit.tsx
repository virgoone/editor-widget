"use client";

import { nanoid } from "nanoid";
import type { TElement } from "platejs";
import { createPlatePlugin } from "platejs/react";

/**
 * blockID 插件
 *
 * 为每个顶层块维护稳定的 `id`（并镜像到 `blockId`）。
 * - 载入时若已有 id，保留不变（保证评论锚点 / Sanity `_key` 稳定）。
 * - 新建 / 拆分块时分配新的 nanoid。
 * - 与宿主保存逻辑里的 `withStableBlockIds` 互补：编辑器内实时维护，保存时兜底。
 */

type BlockWithId = TElement & {
  id?: unknown;
  blockId?: unknown;
};

function isTopLevelBlock(node: unknown): node is BlockWithId {
  return (
    !!node &&
    typeof node === "object" &&
    Array.isArray((node as TElement).children)
  );
}

function asNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

export const BlockIdKit = [
  createPlatePlugin({ key: "blockId" }).overrideEditor(
    ({ editor, tf: { normalizeNode } }) => ({
      transforms: {
        normalizeNode(entry, options) {
          const [node, path] = entry;

          if (path.length === 1 && isTopLevelBlock(node)) {
            const id = asNonEmptyString(node.id);
            const blockId = asNonEmptyString(node.blockId);

            if (!id) {
              const nextId = blockId ?? nanoid();
              editor.tf.setNodes(
                { id: nextId, blockId: nextId } as Partial<TElement>,
                { at: path },
              );
              return;
            }

            if (!blockId) {
              editor.tf.setNodes({ blockId: id } as Partial<TElement>, {
                at: path,
              });
              return;
            }
          }

          normalizeNode(entry, options);
        },
      },
    }),
  ),
];
