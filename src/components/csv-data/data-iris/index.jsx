import { useDataIris } from "../../../hooks/use-data-iris";
import { AxisBottom } from "../data-world-populations-prospects/axis-bottom";
import { AxisLeftCircle } from "./axis-left-circle";
import { xAxisTickFormat } from "../../../utilities/xAxis-tick-format";
import { MarksCircle } from "./marks-circle";
import { scaleLinear, extent } from "d3";

const width = 960;
const height = 600;
const margin = { top: 20, right: 30, bottom: 60, left: 100 };
const xAxisLabelOffset = 45;
const yAxisLabelOffset = -45;

export function DataIris() {
  const { data } = useDataIris();

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.sepal_length;
  const yValue = (d) => d.sepal_width;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  return (
    <svg width={width} height={height}>
      <title>Data Iris</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScale}
          tickFormat={xAxisTickFormat}
          tickOffset={10}
        />
        <text
          textAnchor="middle"
          className="axis-label"
          transform={`translate(${yAxisLabelOffset}, ${
            innerHeight / 2
          }) rotate(-90)`}
        >
          Sepal Width
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
          Petal Length
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
