export function AxisLeftCircle({ yScale, innerWidth, tickOffset = -3 }) {
  return (
    <>
      {yScale.ticks().map((tickValue) => (
        <g
          key={tickValue}
          transform={`translate(0,${yScale(tickValue)})`}
          className="tick"
        >
          <line x2={innerWidth} />
          <text
            y={yScale(tickValue)}
            x={tickOffset}
            dy="-2em"
            style={{ textAnchor: "end", fontSize: "12px" }}
          >
            {tickValue}
          </text>
        </g>
      ))}
    </>
  );
}
