import React from "react";
import "./ResumeModel.css";
import PdfViewer from "../PdfViewer/PdfViewer";
import resume from "../../assets/RESUME.pdf";

const ResumeModel = ({ isOpen, onClose, children }) => {
  const overlayClickHandler = () => {
    onClose();
  };
  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={overlayClickHandler}
    >
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ResumeModel;
