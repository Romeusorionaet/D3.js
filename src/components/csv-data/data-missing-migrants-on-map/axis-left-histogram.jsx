export function AxisLeftHistogram({ yScale, innerWidth, tickOffset = -3 }) {
  return (
    <>
      {yScale.ticks().map((tickValue) => (
        <g
          key={tickValue}
          transform={`translate(0,${yScale(tickValue)})`}
          className="tick-histogram"
        >
          <line x2={innerWidth} />
          <text x={tickOffset} dy=".32em" style={{ textAnchor: "end" }}>
            {tickValue}
          </text>
        </g>
      ))}
    </>
  );
}
