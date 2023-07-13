import { Input } from "../../components";

export const FormGroup = ({
  type = "text",
  title,
  name,
  className,
  onChange,
  icon,
  required,
}) => {
  return (
    <div className={`input-group ${className}`}>
      <label htmlFor={name}>{title}</label>
      <Input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        icon={icon}
        required={required}
      />
    </div>
  );
};
