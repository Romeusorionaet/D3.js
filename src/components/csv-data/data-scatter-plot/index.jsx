import { xAxisTickFormat } from "../../../utilities/xAxis-tick-format";
import { AxisBottomScatterPlot } from "./axis-bottom-scatter-plot";
import { AxisLeftScatterPlot } from "./axis-left-scatter-plot";
import { useDataIris } from "../../../hooks/use-data-iris";
import { MarksScatterPlot } from "./marks-scatter-plot";
import { scaleLinear, extent, scaleOrdinal } from "d3";
import { ColorLegend } from "./color-legend";
import { DropDown } from "../../drop-down";
import { useState } from "react";

const menuHeight = 75;
const width = 960;
const height = 500 - menuHeight;
const margin = { top: 20, right: 150, bottom: 60, left: 100 };
const xAxisLabelOffset = 45;
const yAxisLabelOffset = -45;

const attributes = [
  { value: "sepal_length", label: "Sepal Length" },
  { value: "sepal_width", label: "Sepal Width" },
  { value: "petal_length", label: "Petal Length" },
  { value: "petal_width", label: "Petal Width" },
  { value: "species", label: "Species" },
];

const getLabel = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

export function DataScatterPlot() {
  const { data } = useDataIris();
  const [hoveredValue, setHoveredValue] = useState(null);

  const initialXAttribute = "petal_length";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = "sepal_width";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = (d) => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const colorValue = (d) => d.species;
  const colorLegendLabel = "Species";

  const filteredData = data.filter((d) => hoveredValue === colorValue(d));

  const circleRadius = 7;

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(["#E6842A", "#137B80", "#8E6C8A"]);

  return (
    <>
      <label htmlFor="x-select">
        X:
        <DropDown
          id="x-select"
          options={attributes}
          onSelectedValueChange={setXAttribute}
          selectedValue={xAttribute}
        />
      </label>

      <label htmlFor="y-select">
        Y:
        <DropDown
          id="y-select"
          options={attributes}
          onSelectedValueChange={setYAttribute}
          selectedValue={yAttribute}
        />
      </label>

      <svg width={width} height={height}>
        <title>Data Iris</title>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottomScatterPlot
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
            {yAxisLabel}
          </text>

          <AxisLeftScatterPlot
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

          <g transform={`translate(${innerWidth + 50}, 60)`}>
            <text y={-40} x={20} textAnchor="middle" className="axis-label">
              {colorLegendLabel}
            </text>

            <ColorLegend
              tickSpacing={22}
              tickTextOffset={12}
              tickSize={circleRadius}
              colorScale={colorScale}
              onHover={setHoveredValue}
              hoveredValue={hoveredValue}
            />
          </g>

          <g opacity={hoveredValue ? 0.2 : 1}>
            <MarksScatterPlot
              data={data}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              colorScale={colorScale}
              colorValue={colorValue}
              circleRadius={circleRadius}
            />
          </g>

          <MarksScatterPlot
            data={filteredData}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            colorScale={colorScale}
            colorValue={colorValue}
            circleRadius={circleRadius}
          />
        </g>
      </svg>
    </>
  );
}
