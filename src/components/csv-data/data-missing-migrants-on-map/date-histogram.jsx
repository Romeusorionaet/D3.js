import { xAxisTickTimeFormat } from "../../../utilities/xAxis-tick-time-format";
import { AxisBottomHistogram } from "./axis-bottom-histogram";
import { AxisLeftHistogram } from "./axis-left-histogram";
import { MarksHistogram } from "./marks-histogram";
import { useEffect, useMemo, useRef } from "react";
import {
  scaleLinear,
  timeMonths,
  scaleTime,
  brushX,
  extent,
  select,
  max,
  bin,
  sum,
} from "d3";

const margin = { top: 20, right: 0, bottom: 40, left: 60 };
const xAxisLabelOffset = 40;
const yAxisLabelOffset = -40;

const xAxisLabel = "Time";
const yValue = (d) => d["Total Number of Dead and Missing"];
const yAxisLabel = "Total Number of Dead and Missing";

export function DateHistogram({ data, height, width, setBrushExtent, xValue }) {
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = useMemo(
    () =>
      scaleTime().domain(extent(data, xValue)).range([0, innerWidth]).nice(),
    [data, xValue, innerWidth]
  );

  const binnedData = useMemo(() => {
    const [start, stop] = xScale.domain();

    return bin()
      .value(xValue)
      .domain(xScale.domain())
      .thresholds(timeMonths(start, stop))(data)
      .map((array) => ({
        y: sum(array, yValue),
        x0: array.x0,
        x1: array.x1,
      }));
  }, [data, xValue, xScale]);

  const yScale = useMemo(
    () =>
      scaleLinear()
        .domain([0, max(binnedData, (d) => d.y)])
        .range([innerHeight, 0])
        .nice(),
    [innerHeight, binnedData]
  );

  const brushRef = useRef();

  useEffect(() => {
    const brush = brushX().extent([
      [0, 0],
      [innerWidth, innerHeight],
    ]);
    brush(select(brushRef.current));
    brush.on("brush end", (event) => {
      setBrushExtent(event.selection && event.selection.map(xScale.invert));
    });
  }, [innerWidth, innerHeight, setBrushExtent, xScale]);

  return (
    <>
      <rect width={width} height={height} fill="white" />

      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottomHistogram
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickTimeFormat}
          tickOffset={10}
        />
        <text
          textAnchor="middle"
          transform={`translate(${yAxisLabelOffset}, ${
            innerHeight / innerHeight
          }) rotate(-90)`}
          className="axis-label-histogram"
        >
          {yAxisLabel}
        </text>

        <AxisLeftHistogram
          yScale={yScale}
          innerWidth={innerWidth}
          tickOffset={-10}
        />

        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
          className="axis-label-histogram"
        >
          {xAxisLabel}
        </text>

        <MarksHistogram
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d) => d}
          innerHeight={innerHeight}
        />

        <g ref={brushRef} />
      </g>
    </>
  );
}
