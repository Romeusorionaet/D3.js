import { useDataMissingMigrants } from "../../../hooks/use-data-missing-migrants";
import { xAxisTickTimeFormat } from "../../../utilities/xAxis-tick-time-format";
import { scaleLinear, extent, scaleTime, bin, timeMonths, sum, max } from "d3";
import { AxisBottomMigrants } from "./axis-bottom-migrants";
import { AxisLeftMigrants } from "./axis-left-migrants";
import { MarksMigrants } from "./marks-migrants";

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = -45;

export function DataMissingMigrants() {
  const { data } = useDataMissingMigrants();

  if (!data) {
    return <pre>loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d["Incident Date"];
  const xAxisLabel = "Time";

  const yValue = (d) => d["Total Number of Dead and Missing"];
  const yAxisLabel = "Total Number of Dead and Missing";

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const [start, stop] = xScale.domain();

  const binnedData = bin()
    .value(xValue)
    .domain(xScale.domain())
    .thresholds(timeMonths(start, stop))(data)
    .map((array) => ({
      y: sum(array, yValue),
      x0: array.x0,
      x1: array.x1,
    }));

  const yScale = scaleLinear()
    .domain([0, max(binnedData, (d) => d.y)])
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height}>
      <title>Missing Migrants</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottomMigrants
          xScale={xScale}
          innerHeight={innerHeight}
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

        <AxisLeftMigrants
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

        <MarksMigrants
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d) => d}
          innerHeight={innerHeight}
        />
      </g>
    </svg>
  );
}
