export function Marks({ yScale, xScale, data, xValue, yValue }) {
  return (
    <>
      {data.map((d) => (
        <rect
          fill="steelblue"
          key={d["Country code"]}
          x={0}
          y={yScale(yValue(d))}
          width={xScale(xValue(d))}
          height={yScale.bandwidth()}
        />
      ))}
    </>
  );
}
