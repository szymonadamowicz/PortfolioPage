import React, { useEffect, useState, useCallback } from 'react';
import FirstSegment from './Segments/FirstSegment';

const HomePage: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [segmentHeight, setSegmentHeight] = useState(0);
  const scrollTimeoutDuration = 350;
  const scrollSpeed = 0.32; 

  const smoothScroll = (targetY: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / (1000 * scrollSpeed), 1);

      window.scrollTo(0, startY + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();

    if (isScrolling) return;

    setIsScrolling(true);

    const delta = event.deltaY;

    const targetScroll = delta > 0
      ? window.scrollY + segmentHeight
      : window.scrollY - segmentHeight;

    smoothScroll(targetScroll);

    setTimeout(() => {
      setIsScrolling(false);
    }, scrollTimeoutDuration);
  }, [isScrolling, segmentHeight]);

  const updateSegmentHeight = () => {
    if (typeof window !== 'undefined') {
      setSegmentHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSegmentHeight(window.innerHeight);

      window.addEventListener('wheel', handleScroll, { passive: false });
      window.addEventListener('resize', updateSegmentHeight);

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('resize', updateSegmentHeight);
      };
    }
  }, [handleScroll]);

  return (
    <div>
      <div style={{ height: "100%" }}>
        <FirstSegment />
        <h1 style={{ height: "100vh", backgroundColor: "red" }}>2</h1>
        <h1 style={{ height: "100vh", backgroundColor: "blue" }}>3</h1>
        <h1 style={{ height: "100vh", backgroundColor: "pink" }}>4</h1>
      </div>
    </div>
  );
};

export default HomePage;
