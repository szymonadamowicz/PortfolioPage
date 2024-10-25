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
    useScrollHandler(
      segments,
      scrollSpeed,
      scrollTimeoutDuration,
      isOpen && window.innerWidth < 1280
    );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.innerWidth < 1280) {
      const currentScrollY = window.scrollY;
      const preventScroll = () => window.scrollTo(0, currentScrollY);

      window.addEventListener("scroll", preventScroll);
      return () => window.removeEventListener("scroll", preventScroll);
    }
  }, [isOpen]);

  const goToSegment = (segment: number) => {
    if (isOpen && window.innerWidth < 1280) return;
    const targetScroll = segment * segmentHeight;
    setSegmentNumber(segment);
    smoothScroll(targetScroll);
  };

  const adjustedIsOpen = isOpen && window.innerWidth < 1280;

  return (
    <div className="w-full overflow-hidden">
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
            <SegmentComponent isOpen={adjustedIsOpen} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
