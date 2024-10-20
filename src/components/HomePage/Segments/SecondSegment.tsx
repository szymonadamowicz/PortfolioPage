import React from "react";
import PageOverlay from "../../PageOverlay";

const SecondSegment = () => {
  const bgc = "#0F172A";
  return (
    <PageOverlay bgc={bgc}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-bold text-white">What I do</h1>
        <p className="text-xl text-gray-300">
          As a Developer, I focus on crafting clean, efficient code and
          delivering responsive, intuitive user experiences.
        </p>
      </div>
    </PageOverlay>
  );
};

export default SecondSegment;
