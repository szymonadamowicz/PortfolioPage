import React, { useEffect } from "react";
import FirstSegment from "./Segments/FirstSegment";
import useScrollHandler from "../UseScrollHandler";
import SideBarDisplay from "./SideBarDisplay";

const HomePage: React.FC = () => {
  const segments = 3;
  const scrollSpeed = 0.25;
  const scrollTimeoutDuration = 250;

  const { segmentNumber, segmentHeight, setSegmentNumber, smoothScroll } = useScrollHandler(
    segments, 
    scrollSpeed, 
    scrollTimeoutDuration
  );

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
      {/* Przekazujemy funkcję goToSegment do nawigacji */}
      <SideBarDisplay segmentNumber={segmentNumber} segments={segments} goToSegment={goToSegment} />
      <div style={{ height: "100vh" }}>
        <FirstSegment />
      </div>
      <div style={{ height: "100vh", backgroundColor: "red" }}>
        <h1>2</h1>
      </div>
      <div style={{ height: "100vh", backgroundColor: "blue" }}>
        <h1>3</h1>
      </div>
      <div style={{ height: "100vh", backgroundColor: "pink" }}>
        <h1>4</h1>
      </div>
    </div>
  );
};

export default HomePage;
