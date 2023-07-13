import { useEffect } from "react";

export const Drawer = ({ children, className, isOpen, onClose }) => {
  const onCloseHandler = (e) => {
    if (e.target.classList.contains("drawer")) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => onCloseHandler(e));
    window.removeEventListener("click", (e) => onCloseHandler(e));
  }, []);

  return (
    <div className={`drawer ${className} ${isOpen ? "open" : ""}`}>
      <div className="drawer__panel">{children}</div>
    </div>
  );
};
