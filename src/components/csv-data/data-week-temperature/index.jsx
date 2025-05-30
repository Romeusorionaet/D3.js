import { useDataWeekTemperature } from "../../../hooks/use-data-week-temperature";
import { xAxisTickTimeFormat } from "../../../utilities/xAxis-tick-time-format";
import { AxisBottomLine } from "./axis-bottom-line";
import { scaleLinear, extent, scaleTime } from "d3";
import { AxisLeftLine } from "./axis-left-line";
import { MarksLine } from "./marks-line";

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
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height}>
      <title>Week Temperature</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottomLine
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

        <AxisLeftLine
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

        <MarksLine
          xScale={xScale}
          yScale={yScale}
          data={data}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickTimeFormat}
          circleRadius={4}
        />
      </g>
    </svg>
  );
}
