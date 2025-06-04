export function AxisBottomHistogram({
  innerHeight,
  xScale,
  tickFormat,
  tickOffset = 3,
}) {
  return (
    <>
      {xScale.ticks(5).map((tickValue) => (
        <g
          key={tickValue}
          transform={`translate(${xScale(tickValue)})`}
          className="tick-histogram"
        >
          <line y2={innerHeight} />
          <text
            style={{ textAnchor: "middle" }}
            dy=".71em"
            y={innerHeight + tickOffset}
          >
            {tickFormat(tickValue)}
          </text>
        </g>
      ))}
    </>
  );
}
