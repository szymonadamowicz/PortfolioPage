import React from "react";
import PageOverlay from "../../PageOverlay";

const SecondSegment = () => {
  const bgc = "#4A68B0";
  return (
    <PageOverlay bgc={bgc}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-bold text-lime-400">What I do</h1>
        <p className="text-xl text-white">
          As a Developer, I focus on crafting clean, efficient code and
          delivering responsive, intuitive user experiences.
        </p>
      </div>
    </PageOverlay>
  );
};

export default SecondSegment;
