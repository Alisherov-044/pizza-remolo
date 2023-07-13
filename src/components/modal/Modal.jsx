import { useEffect } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, isOpen, onClose }) => {
  const onCloseHandler = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", (e) => onCloseHandler(e));
      window.removeEventListener("click", (e) => onCloseHandler(e));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className="modal">{children}</div>,
        document.querySelector(".modals")
      )}
    </>
  );
};
