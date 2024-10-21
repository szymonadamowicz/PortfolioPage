import React from "react";
import PageOverlay from "../../PageOverlay";

const ThirdSegment = () => {
  const bgc = "#0A014F";
  return (
    <PageOverlay bgc={bgc}>
      <div className="text-lime-400 text-center text-4xl font-semibold">
        What have I accomplished?
      </div>
    </PageOverlay>
  );
};

export default ThirdSegment;
