export function Marks({ yScale, xScale, data, xValue, yValue }) {
  return (
    <>
      {data.map((d) => (
        <rect
          key={d["Country code"]}
          x={0}
          y={yScale(yValue(d))}
          width={xScale(xValue(d))}
          height={yScale.bandwidth()}
          className="mark"
        />
      ))}
    </>
  );
}
