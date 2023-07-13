export const Input = ({
  type = "text",
  name,
  id,
  icon,
  placeholder,
  className,
  onChange,
  onBlur,
  required = false,
}) => {
  return (
    <div className={`input ${className}`}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {icon && icon}
    </div>
  );
};
