export const Button = ({
  children,
  content,
  className,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {content ? content : children}
    </button>
  );
};
