import React from "react";
import resume from "../../assets/RaviTejaL.pdf";

const MyResume = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        style={{ border: "2px solid transperent", borderRadius: "8px" }}
        title="PDF Viewer"
        src={resume}
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

export default MyResume;
