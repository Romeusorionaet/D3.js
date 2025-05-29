export function AxisLeft({ yScale }) {
  return (
    <>
      {yScale.domain().map((tickValue) => (
        <text
          key={tickValue}
          y={yScale(tickValue) + yScale.bandwidth() / 2}
          x={-3}
          dy=".32em"
          style={{ textAnchor: "end", fontSize: "12px" }}
        >
          {tickValue}
        </text>
      ))}
    </>
  );
}
