import { useState, useEffect, useCallback } from "react";

const useScrollHandler = (
  maxSegment: number,
  scrollSpeed: number,
  scrollTimeoutDuration: number
) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [segmentHeight, setSegmentHeight] = useState(0);
  const [segmentNumber, setSegmentNumber] = useState(0);

  const smoothScroll = useCallback(
    (targetY: number) => {
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
    },
    [scrollSpeed]
  );

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      const delta = event.deltaY;
      let newSegmentNumber = delta > 0 ? segmentNumber + 1 : segmentNumber - 1;

      if (newSegmentNumber < 0) {
        newSegmentNumber = 0;
      }

      if (newSegmentNumber > maxSegment) {
        newSegmentNumber = maxSegment;
      }

      const targetScroll = newSegmentNumber * segmentHeight;

      setSegmentNumber(newSegmentNumber);
      smoothScroll(targetScroll);

      window.location.hash = `#${newSegmentNumber}`;

      setTimeout(() => {
        setIsScrolling(false);
      }, scrollTimeoutDuration);
    },
    [
      isScrolling,
      segmentHeight,
      segmentNumber,
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

      const currentHash = window.location.hash;
      const hashSegment = currentHash ? parseInt(currentHash.replace("#", "")) : 0;

      setSegmentNumber(hashSegment);

      window.scrollTo(0, hashSegment * window.innerHeight);

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
