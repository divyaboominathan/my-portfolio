import React from "react";
import "../assets/styles/Resume.css";

const Resume: React.FC = () => {
  const RESUME_FILE_PATH = "/Divya_Resume.pdf";

  return (
    <section className="resume-page-container">
      <h1 className="page-title">My Technical Resume</h1>

      {/* Download Button */}
      <a
        href={RESUME_FILE_PATH}
        download="Divya_Resume_SoftwareEngineer.pdf"
        className="download-button"
      >
        Download PDF
      </a>

      {/* Embedded PDF Viewer via iframe */}
      <div className="pdf-viewer-iframe">
        <iframe
          src={RESUME_FILE_PATH}
          title="Divya's Resume"
          width="100%"
          height="1000px" // Adjust height to fill screen
          frameBorder="0"
        >
          <p>
            Your browser does not support iframes. Please use the download link
            above.
          </p>
        </iframe>
      </div>
    </section>
  );
};

export default Resume;
