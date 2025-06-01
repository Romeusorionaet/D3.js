export function DropDown({
  id,
  options,
  onSelectedValueChange,
  selectedValue,
}) {
  return (
    <select
      id={id}
      onChange={(event) => onSelectedValueChange(event.target.value)}
    >
      {options.map(({ label, value }) => (
        <option key={label} value={value} selected={value === selectedValue}>
          {label}
        </option>
      ))}
    </select>
  );
}
