export const Icon = ({ children, content, className, onClick }) => {
  return (
    <span className={`icon ${className}`} onClick={onClick}>
      {content ? content : children}
    </span>
  );
};
