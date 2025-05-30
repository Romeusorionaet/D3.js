import { line, curveNatural } from "d3";

export function MarksLine({
  yScale,
  xScale,
  data,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}) {
  return (
    <g className="mark-line">
      <path
        fill="none"
        stroke="black"
        d={line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))
          .curve(curveNatural)(data)}
      />
      {data.map((d, i) => {
        return (
          <circle
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={circleRadius}
          >
            <title>{tooltipFormat(xValue(d))}</title>
          </circle>
        );
      })}
    </g>
  );
}
