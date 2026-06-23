import type { RetimeConfig } from "@/timeline";
import { getSourceTimeAtClipTime } from "./resolve";

export function getSourceSpanAtClipTime({
  clipTime,
  retime,
}: {
  clipTime: number;
  retime?: RetimeConfig;
}): number {
  return Math.max(0, getSourceTimeAtClipTime({ clipTime, retime }));
}

function splitRetimeAtClipTime({
  retime,
}: {
  retime?: RetimeConfig;
  splitClipTime: number;
}): {
  left: RetimeConfig | undefined;
  right: RetimeConfig | undefined;
} {
  return { left: retime, right: retime };
}

function adjustRetimeForTrimChange({
  retime,
}: {
  retime?: RetimeConfig;
  clipTrimTime: number;
  side: "start" | "end";
}): RetimeConfig | undefined {
  return retime;
}
