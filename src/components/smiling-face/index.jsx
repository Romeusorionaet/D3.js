import { BackgroundCircle } from "./background-circle";
import { FaceContainer } from "./face-container";
import { Mouth } from "./mouth";
import { Eye } from "./eye";

export function SmilingFace({
  width,
  height,
  centerX = width,
  centerY = height,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeBallOffsetX,
  eyeBallOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) {
  return (
    <FaceContainer
      centerX={centerX}
      centerY={centerY}
      height={height}
      width={width}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eye
        eyeBallOffsetX={eyeBallOffsetX}
        eyeBallOffsetY={eyeBallOffsetY}
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
}
