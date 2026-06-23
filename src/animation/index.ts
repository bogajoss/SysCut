export {
  getChannelValueAtTime,
  getScalarSegmentInterpolation,
  normalizeChannel,
} from "./interpolation";

export {
  clampAnimationsToDuration,
  cloneAnimations,
  removeElementKeyframe,
  retimeElementKeyframe,
  setChannel,
  splitAnimationsAtTime,
  updateScalarKeyframeCurve,
  upsertPathKeyframe,
} from "./keyframes";

export {
  getElementLocalTime,
  resolveAnimationPathValueAtTime,
} from "./resolve";

export {
  getElementKeyframes,
  getKeyframeById,
  getKeyframeAtTime,
  hasKeyframesForPath,
} from "./keyframe-query";

export {
  type EditableScalarChannels,
  getEditableScalarChannels,
  getScalarKeyframeContext,
} from "./graph-channels";

export {
  getCurveHandlesForNormalizedCubicBezier,
  getNormalizedCubicBezierForScalarSegment,
} from "./curve-bridge";

export {
  buildGraphicParamPath,
  isGraphicParamPath,
  parseGraphicParamPath,
  resolveGraphicParamsAtTime,
} from "./graphic-param-channel";

export {
  buildEffectParamPath,
  isEffectParamPath,
  parseEffectParamPath,
  removeEffectParamKeyframe,
  resolveEffectParamsAtTime,
} from "./effect-param-channel";

export {
  type GroupKeyframeRef,
} from "./property-groups";

export { isAnimationPath } from "./path";

export type { NumericSpec } from "./types";
