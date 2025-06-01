export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
  onHover,
  hoveredValue,
}) =>
  colorScale.domain().map((domainValue, i) => (
    <g
      transform={`translate(0,${i * tickSpacing})`}
      onMouseEnter={() => {
        onHover(domainValue);
      }}
      onMouseOut={() => {
        onHover(null);
      }}
      opacity={hoveredValue && domainValue !== hoveredValue ? 0.2 : 1}
      className="tick"
    >
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ));
