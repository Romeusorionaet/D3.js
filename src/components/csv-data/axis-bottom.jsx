export function AxisBottom({ innerHeight, xScale, tickFormat }) {
  return (
    <>
      {xScale.ticks().map((tickValue) => (
        <g
          key={tickValue}
          transform={`translate(${xScale(tickValue)},0)`}
          className="tick"
        >
          <line y2={innerHeight} />
          <text style={{ textAnchor: "middle" }} dy=".71em" y={innerHeight + 3}>
            {tickFormat(tickValue)}
          </text>
        </g>
      ))}
    </>
  );
}
