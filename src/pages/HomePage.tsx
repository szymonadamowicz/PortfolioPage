import React, { useEffect, useState, useCallback } from 'react';
import FirstSegment from '../components/HomePage/FirstSegment.tsx';

const HomePage: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [segmentHeight, setSegmentHeight] = useState(window.innerHeight);
  const scrollTimeoutDuration = 600;

  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();

    if (isScrolling) return;

    setIsScrolling(true);

    const delta = event.deltaY;

    if (delta > 0) {
      window.scrollBy({
        top: segmentHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: -segmentHeight,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, scrollTimeoutDuration);
  }, [isScrolling, segmentHeight]);

  const updateSegmentHeight = () => {
    setSegmentHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('resize', updateSegmentHeight);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', updateSegmentHeight); 
    };
  }, [handleScroll]); 

  return (
    <div>
      <div style={{ height: "100%", backgroundColor: "red" }}>
       <FirstSegment/>
        <h1 style={{ height: "100vh" , backgroundColor: "red" }}>2</h1>
        <h1 style={{ height: "100vh" , backgroundColor: "blue" }}>3</h1>
        <h1 style={{ height: "100vh" , backgroundColor: "pink" }}>4</h1>
      </div>
    </div>
  );
};

export default HomePage;
