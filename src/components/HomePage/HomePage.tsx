import React, { useEffect, useState } from "react";
import FirstSegment from "./Segments/FirstSegment";
import useScrollHandler from "../UseScrollHandler";
import SideBarDisplay from "./SideBarDisplay";
import SecondSegment from "./Segments/SecondSegment";
import ThirdSegment from "./Segments/ThirdSegment";
import FourthSegment from "./Segments/FourthSegment";
import FifthSegment from "./Segments/FifthSegment";
import { SegmentsNameProps } from "../../types/types";

const HomePage: React.FC = () => {
  const segmentsName: React.FC<SegmentsNameProps>[] = [
    FirstSegment,
    SecondSegment,
    ThirdSegment,
    FourthSegment,
    FifthSegment,
  ];

  const segments = 4;
  const scrollSpeed = 0.25;
  const scrollTimeoutDuration = 250;
  const [isOpen, setIsOpen] = useState(false);

  const { segmentNumber, segmentHeight, setSegmentNumber, smoothScroll } =
    useScrollHandler(segments, scrollSpeed, scrollTimeoutDuration);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  

  const goToSegment = (segment: number) => {
    const targetScroll = segment * segmentHeight;
    setSegmentNumber(segment);
    smoothScroll(targetScroll);
  };

  

  return (
    <div className="w-full">
      <SideBarDisplay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        segmentNumber={segmentNumber}
        segments={segments}
        goToSegment={goToSegment}
      />
      <div>
        {segmentsName.map((SegmentComponent, index) => (
          <div key={index} style={{ height: "100vh" }}>
            <SegmentComponent isOpen={isOpen} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
