import React from "react";
import { SegmentProps } from "../../types/types";

const SegmentCounter: React.FC<SegmentProps> = ({
  segmentNumber,
  segments,
  goToSegment,
}) => {
  const segmentsArray = Array.from({ length: segments + 1 }, (_, i) => i);

  return (
    <div className="fixed right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
      {segmentsArray.map((section, index) => (
        <button
          onClick={() => goToSegment(index)}
          key={index}
          className={`w-6 h-6 border-2 transition-all duration-500 ease-in-out transform ${
            segmentNumber === section
              ? "bg-lime-400 border-lime-400 rotate-0 scale-110"
              : "rotate-45 border-lime-400 bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};

export default SegmentCounter;
