import React from "react";
import {
  faAnglesLeft,
  faAnglesRight,
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ControlPanel.css"

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber, scale, setScale } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? "disabled" : "clickable";
  const lastPageClass = isLastPage ? "disabled" : "clickable";

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className="control-panel">
      <div className="page-control">
        <FontAwesomeIcon
          className={` aleft ${firstPageClass}`}
          icon={faAnglesLeft}
          onClick={goToFirstPage}
        />
        <FontAwesomeIcon
          className={` aleft ${firstPageClass}`}
          icon={faAngleLeft}
          onClick={goToPreviousPage}
        />
        <span>
          Page
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="pageinput"
            value={pageNumber}
            onChange={onPageChange}
          />
          of {numPages}
        </span>
        <FontAwesomeIcon
          className={` aright ${lastPageClass}`}
          icon={faAngleRight}
          onClick={goToNextPage}
        />
          <FontAwesomeIcon
          className={` aright ${lastPageClass}`}
          icon={faAnglesRight}
          onClick={goToLastPage}
        />
      </div>
      <div className="zoom-control">
        <FontAwesomeIcon
          className={`zoomminus  ${zoomOutClass}`}
          icon={faMagnifyingGlassMinus}
          onClick={zoomOut}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <FontAwesomeIcon
          className={`zoomplus ${zoomInClass}`}
          icon={faMagnifyingGlassPlus}
          onClick={zoomIn}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
