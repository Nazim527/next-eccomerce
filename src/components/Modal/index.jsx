import React from "react";
import "./style.scss";

const OverlayModal = ({ className, classNameOverlay, children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`overlay fluid ${classNameOverlay}`}
        onClick={handleOverlayClick}
      >
        <div className={`modal ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default OverlayModal;
