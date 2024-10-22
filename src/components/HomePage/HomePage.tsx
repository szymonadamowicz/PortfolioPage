import React, { useEffect } from "react";
import FirstSegment from "./Segments/FirstSegment";
import useScrollHandler from "../UseScrollHandler";
import SideBarDisplay from "./SideBarDisplay";
import SecondSegment from "./Segments/SecondSegment";
import ThirdSegment from "./Segments/ThirdSegment";
import FourthSegment from "./Segments/FourthSegment";
import FifthSegment from "./Segments/FifthSegment";

const HomePage: React.FC = () => {
  const segments = 4;
  const scrollSpeed = 0.25;
  const scrollTimeoutDuration = 250;

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
    <div>
      <SideBarDisplay
        segmentNumber={segmentNumber}
        segments={segments}
        goToSegment={goToSegment}
      />
      <div style={{ height: "100vh" }}>
        <FirstSegment />
      </div>
      <div style={{ height: "100vh" }}>
        <SecondSegment />
      </div>
      <div style={{ height: "100vh" }}>
        <ThirdSegment />
      </div>
      <div style={{ height: "100vh" }}>
        <FourthSegment />
      </div>
      <div style={{ height: "100vh" }}>
        <FifthSegment />
      </div>
    </div>
  );
};

export default HomePage;
