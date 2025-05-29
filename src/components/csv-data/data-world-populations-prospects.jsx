import { useDataPopulationsProspects } from "../../hooks/use-data-populations-prospects";
import { AxisBottom } from "./axis-bottom";
import { AxisLeft } from "./axis-left";
import { scaleLinear, max } from "d3";
import { Marks } from "./marks";
import { scaleBand } from "d3";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

export function DatWorldPopulationsProspects() {
  const { data } = useDataPopulationsProspects();

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand().domain(data.map(yValue)).range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <title>World populations prospects</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom innerHeight={innerHeight} xScale={xScale} />
        <AxisLeft yScale={yScale} />
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
