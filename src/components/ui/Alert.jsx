import { useEffect, useState } from "react";

export const Alert = ({ error, setError, timeout = 3000 }) => {
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, timeout);
    }
  }, [error]);

  return (
    <div className={`alert ${error ? "active" : ""}`}>
      <span className="text">{error}</span>
    </div>
  );
};
