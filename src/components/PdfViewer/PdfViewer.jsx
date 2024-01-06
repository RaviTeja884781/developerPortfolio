import React from "react";
import "./PdfViewer.css";
import { Document, Page, pdfjs } from "react-pdf";
// import StracturedDocsContext from "../../context";
// import "../Loader/Loader"

const PdfLoader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className="container-loader">
      <div className="loading">
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
        <div className="ball four"></div>
      </div>
    </div>
  );
};

const PdfViewer = (props) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [isLoading, setIsLoading] = React.useState(true);

  // const { setNumPages, pageNumber, scale } = React.useContext(
  //   StracturedDocsContext
  // );
  const onDocumentLoadSuccess = ({ numPages }) => {
    // setNumPages(numPages);
    setIsLoading(false);
  };
  const { pdf } = props;

  return (
    <div>
      <div className="PdfViewer">
        <PdfLoader isLoading={isLoading} />
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            size="A4"
            //  pageNumber={pageNumber} scale={scale}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
