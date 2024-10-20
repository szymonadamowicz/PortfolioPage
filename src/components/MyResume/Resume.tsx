import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <iframe
        src="/CV.pdf"
        className="w-full h-full"
        style={{ border: "none" }}
        title="Szymon Adamowicz - CV"
      />
    </div>
  );
};

export default Resume;
