import { xAxisTickFormat } from "../../../utilities/xAxis-tick-format";

export function MarksCircle({ yScale, xScale, data, xValue, yValue }) {
  return (
    <>
      {data.map((d, i) => {
        return (
          <circle
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={7}
            className="mark"
          >
            <title>{xAxisTickFormat(xValue(d))}</title>
          </circle>
        );
      })}
    </>
  );
}
