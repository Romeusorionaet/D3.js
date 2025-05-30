export function AxisLeftLine({ yScale, innerWidth, tickOffset = -3 }) {
  return (
    <>
      {yScale.ticks().map((tickValue) => (
        <g
          key={tickValue}
          transform={`translate(15,${yScale(tickValue)})`}
          className="tick"
        >
          <line x2={innerWidth} />
          <text
            x={tickOffset}
            dy=".32em"
            style={{ textAnchor: "end", fontSize: "12px" }}
          >
            {tickValue}
          </text>
        </g>
      ))}
    </>
  );
}
