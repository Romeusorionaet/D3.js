export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
}) =>
  colorScale.domain().map((domainValue, i) => (
    <g transform={`translate(0,${i * tickSpacing})`} className="tick">
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ));
