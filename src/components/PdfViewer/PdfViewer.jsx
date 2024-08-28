import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Paragraph, Spinner } from "react-ui-essentials";
import { Document, Page, pdfjs } from "react-pdf";
import { RoundedIcons } from "react-ui-essentials-icons";
const { ZoomIn, ZoomOut, FlipCameraAndroid, ChevronLeft, ChevronRight } =
  RoundedIcons;
import styles from "./PdfViewer.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfLoader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className={styles.spinner_container}>
      <Spinner size="md" variant="secondary" />
      <p>Loading document...</p>
    </div>
  );
};

const ControlPanel = React.memo(
  ({
    scale,
    setScale,
    rotate,
    setRotate,
    currentPage,
    numPages,
    setCurrentPage,
  }) => (
    <Box
      padding="8px"
      height="60px"
      margin="10px 0 0 0"
      className={styles.control_panel}
    >
      <Button
        variant="help"
        onClick={() => setScale(scale + 0.1)}
        aria-label="Zoom In"
      >
        <ZoomIn width="20px" height="20px" fill="#fff" />
      </Button>
      <Button
        variant="help"
        onClick={() => setScale(scale - 0.1)}
        aria-label="Zoom Out"
      >
        <ZoomOut width="20px" height="20px" fill="#fff" />
      </Button>
      <Button
        variant="help"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        aria-label="Previous Page"
      >
        <ChevronLeft width="20px" height="20px" fill="#fff" />
      </Button>
      <Paragraph>
        {currentPage} / {numPages}
      </Paragraph>
      <Button
        variant="help"
        onClick={() => setCurrentPage(Math.min(numPages, currentPage + 1))}
        disabled={currentPage >= numPages}
        aria-label="Next Page"
      >
        <ChevronRight width="20px" height="20px" fill="#fff" />
      </Button>
      <Button
        variant="help"
        onClick={() => setRotate((rotate + 90) % 360)}
        aria-label="Rotate"
      >
        <FlipCameraAndroid width="20px" height="20px" fill="#fff" />
      </Button>
    </Box>
  )
);

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotate, setRotate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [viewerSize, setViewerSize] = useState({
    width: window.innerWidth - 350,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewerSize({
        width: window.innerWidth - 20,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <Box margin="8px" className={styles.pdf_viewer}>
      <ControlPanel
        scale={scale}
        setScale={setScale}
        rotate={rotate}
        setRotate={setRotate}
        currentPage={currentPage}
        numPages={numPages}
        setCurrentPage={setCurrentPage}
      />
      <Divider margin="0 0 10px 0" />
      <Box className={styles.document_container}>
        <PdfLoader isLoading={isLoading} />
        <Document
          file={pdfUrl}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Box width={viewerSize.width} height={viewerSize.height}>
            <Page
              size="A4"
              pageNumber={currentPage}
              scale={scale}
              rotate={rotate}
              key={`page_${currentPage}`}
            />
          </Box>
        </Document>
      </Box>
    </Box>
  );
};

export default React.memo(PDFViewer);
