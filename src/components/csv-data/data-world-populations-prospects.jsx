import * as d3 from "d3";
import { scaleBand, scaleLinear, max } from "d3";
import { useState, useEffect } from "react";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

export function DatWorldPopulationsProspects() {
  const [data, setData] = useState();

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2050"];
      return d;
    };

    d3.csv(
      "https://gist.githubusercontent.com/Romeusorionaet/9db54ce690a4c354c7312f1260a73ec9/raw/90a6d77ebbbe3870c46780092eec3ad2831c986f/united_nations_world-populations_prospects_2050.csv",
      row
    ).then((data) => {
      setData(data.sort((a, b) => b.Population - a.Population).slice(0, 20));
    });
  }, []);

  if (!data) {
    return <pre>"loading..."</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <title>World populations prospects</title>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text
              style={{ textAnchor: "middle" }}
              dy=".71em"
              y={innerHeight + 3}
            >
              {tickValue}
            </text>
          </g>
        ))}

        {yScale.domain().map((tickValue) => (
          <text
            key={tickValue}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
            x={-3}
            dy=".32em"
            style={{ textAnchor: "end", whiteSpace: "wrap" }}
          >
            {tickValue}
          </text>
        ))}

        {data.map((d) => (
          <rect
            fill="steelblue"
            key={d["Country code"]}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
}
