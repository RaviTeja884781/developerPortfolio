import React from "react";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PDFPrinter = ({ file }) => {
  const print = () => {
    const pdfFrame = document.createElement("iframe");
    pdfFrame.style.visibility = "hidden";
    pdfFrame.src = file;
    document.body.appendChild(pdfFrame);
    pdfFrame.contentWindow.focus();
    pdfFrame.contentWindow.print();
  };
  return (
    <FontAwesomeIcon
      className="clickable"
      icon={faPrint}
      onClick={print}
      title="download"
    />
  );
};

export default PDFPrinter;
