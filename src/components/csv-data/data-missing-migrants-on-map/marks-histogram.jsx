export function MarksHistogram({
  yScale,
  xScale,
  binnedData,
  tooltipFormat,
  innerHeight,
}) {
  return (
    <g className="mark-line">
      {binnedData.map((d, i) => (
        <rect
          key={i}
          x={xScale(d.x0)}
          y={yScale(d.y)}
          width={xScale(d.x1) - xScale(d.x0)}
          height={innerHeight - yScale(d.y)}
          className="mark"
        >
          <title>{tooltipFormat(d.y)}</title>
        </rect>
      ))}
    </g>
  );
}
