import { arc } from "d3";

export function Mouth({ mouthWidth, mouthRadius }) {
  const mouthArc = arc()
    .innerRadius(mouthWidth)
    .outerRadius(mouthRadius + mouthRadius)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return <path d={mouthArc()} />;
}
