export const TextArea = ({
  title,
  name,
  className,
  required = false,
  cols = 30,
  rows = 10,
}) => {
  return (
    <div className={`input-group ${className}`}>
      <label htmlFor={name}>{title}</label>
      <textarea
        name={name}
        id={name}
        cols={cols}
        rows={rows}
        required={required}
      ></textarea>
    </div>
  );
};
