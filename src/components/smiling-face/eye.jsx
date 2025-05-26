export function Eye({
  eyeOffsetX,
  eyeOffsetY,
  eyeBallOffsetX,
  eyeBallOffsetY,
  eyeRadius,
}) {
  return (
    <>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle
        cx={-eyeBallOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius / 3}
        fill="white"
      />
      <circle
        cx={eyeBallOffsetY}
        cy={-eyeOffsetY}
        r={eyeRadius / 3}
        fill="white"
      />
    </>
  );
}
