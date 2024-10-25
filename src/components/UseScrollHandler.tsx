import { useState, useEffect, useCallback, useRef } from "react";

const useScrollHandler = (
  maxSegment,
  scrollSpeed,
  scrollTimeoutDuration
) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [segmentHeight, setSegmentHeight] = useState(0);
  const [segmentNumber, setSegmentNumberState] = useState(0);
  
  const segmentNumberRef = useRef(segmentNumber);

  const setSegmentNumber = (newSegmentNumber) => {
    setSegmentNumberState(newSegmentNumber);
    segmentNumberRef.current = newSegmentNumber;
  };

  const smoothScroll = useCallback(
    (targetY) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      let startTime = null;

      const animateScroll = (currentTime) => {
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
    },
    [scrollSpeed]
  );

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      const delta = event.deltaY;
      let newSegmentNumber = delta > 0 ? segmentNumberRef.current + 1 : segmentNumberRef.current - 1;

      if (newSegmentNumber < 0) {
        newSegmentNumber = 0;
      }

      if (newSegmentNumber > maxSegment) {
        newSegmentNumber = maxSegment;
      }

      const targetScroll = newSegmentNumber * segmentHeight;

      setSegmentNumber(newSegmentNumber);
      smoothScroll(targetScroll);

      sessionStorage.setItem("currentSegment", String(newSegmentNumber));

      setTimeout(() => {
        setIsScrolling(false);
      }, scrollTimeoutDuration);
    },
    [
      isScrolling,
      segmentHeight,
      maxSegment,
      scrollTimeoutDuration,
      smoothScroll,
    ]
  );

  const updateSegmentHeight = () => {
    if (typeof window !== "undefined") {
      setSegmentHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSegmentHeight(window.innerHeight);

      const savedSegment = sessionStorage.getItem("currentSegment");
      const initialSegment = savedSegment ? parseInt(savedSegment) : 0;

      setSegmentNumber(initialSegment);
      segmentNumberRef.current = initialSegment;

      window.scrollTo(0, initialSegment * window.innerHeight);

      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("resize", updateSegmentHeight);

      return () => {
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("resize", updateSegmentHeight);
      };
    }
  }, [handleScroll]);

  return { segmentNumber, segmentHeight, setSegmentNumber, smoothScroll };
};

export default useScrollHandler;
