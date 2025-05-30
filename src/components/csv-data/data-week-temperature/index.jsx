import { useDataWeekTemperature } from "../../../hooks/use-data-week-temperature";
import { xAxisTickTimeFormat } from "../../../utilities/xAxis-tick-time-format";
import { AxisBottom } from "../data-world-populations-prospects/axis-bottom";
import { AxisLeftCircle } from "../data-iris/axis-left-circle";
import { MarksCircle } from "../data-iris/marks-circle";
import { scaleLinear, extent, scaleTime } from "d3";

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 100 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = -45;

export function DataWeekTemperature() {
  const { data } = useDataWeekTemperature();

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.timestamp;
  const xAxisLabel = "Time";

  const yValue = (d) => d.temperature;
  const yAxisLabel = "Temperature";

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([innerWidth, 0])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0]);

  return (
    <svg width={width} height={height}>
      <title>World populations prospects</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScale}
          tickFormat={xAxisTickTimeFormat}
          tickOffset={10}
        />
        <text
          textAnchor="middle"
          className="axis-label"
          transform={`translate(${yAxisLabelOffset}, ${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>

        <AxisLeftCircle
          yScale={yScale}
          innerWidth={innerWidth}
          tickOffset={-10}
        />

        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
          className="axis-label"
        >
          {xAxisLabel}
        </text>

        <MarksCircle
          xScale={xScale}
          yScale={yScale}
          data={data}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
}
