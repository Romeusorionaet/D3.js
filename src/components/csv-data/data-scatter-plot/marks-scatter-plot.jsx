import { xAxisTickFormat } from "../../../utilities/xAxis-tick-format";

export function MarksScatterPlot({
  data,
  yScale,
  xScale,
  xValue,
  yValue,
  colorScale,
  colorValue,
  circleRadius,
}) {
  return (
    <>
      {data.map((d, i) => {
        return (
          <circle
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={circleRadius}
            fill={colorScale(colorValue(d))}
          >
            <title>{xAxisTickFormat(xValue(d))}</title>
          </circle>
        );
      })}
    </>
  );
}
