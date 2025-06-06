import { useDataPopulationsProspects } from "../../../hooks/use-data-populations-prospects";
import { xAxisTickFormat } from "../../../utilities/xAxis-tick-format";
import { AxisBottom } from "./axis-bottom";
import { AxisLeft } from "./axis-left";
import { scaleLinear, max } from "d3";
import { Marks } from "./marks";
import { scaleBand } from "d3";

const width = 960;
const height = 600;
const margin = { top: 20, right: 30, bottom: 50, left: 300 };
const xAxisLabelOffset = 45;

export function DataWorldPopulationsProspects() {
  const { data } = useDataPopulationsProspects();

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.1);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <title>World populations prospects</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScale}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
          className="axis-label"
        >
          Population prospects (2050)
        </text>
        <Marks
          yScale={yScale}
          xScale={xScale}
          data={data}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
}
