export const Select = ({ options, className, name }) => {
  return (
    <div className="input-group">
      <select
        name={name}
        className={`selection ${className}`}
        defaultChecked={options[0].id}
      >
        {options.map(({ id, name }, index) => (
          <option value={id} key={index}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
