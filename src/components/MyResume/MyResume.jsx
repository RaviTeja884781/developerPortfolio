import React from "react";
import resume from "../../assets/RaviTeja(Beng).pdf";
import PDFViewer from "../PdfViewer/PdfViewer";

const MyResume = () => {
  return <PDFViewer pdfUrl={resume} />;
};

export default React.memo(MyResume);
