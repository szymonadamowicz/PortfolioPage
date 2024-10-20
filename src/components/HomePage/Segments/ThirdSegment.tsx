import React from "react";
import PageOverlay from "../../PageOverlay";

const ThirdSegment = () => {
  const bgc = "#1a1a1a";
  return (
    <PageOverlay bgc={bgc}>
      <div className="text-white text-center text-4xl font-semibold">
        What have I accomplished?
      </div>
    </PageOverlay>
  );
};

export default ThirdSegment;
