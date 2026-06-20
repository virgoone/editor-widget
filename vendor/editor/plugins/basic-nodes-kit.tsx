"use client";

import { BasicBlocksKit } from "@bunship-ai/editor/plugins/basic-blocks-kit";
import { BasicMarksKit } from "@bunship-ai/editor/plugins/basic-marks-kit";

export const BasicNodesKit = [...BasicBlocksKit, ...BasicMarksKit];
