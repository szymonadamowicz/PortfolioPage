import { useState, useEffect, useCallback, useRef } from "react";

const useScrollHandler = (
  maxSegment,
  scrollSpeed,
  scrollTimeoutDuration,
  isOpen
) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [segmentHeight, setSegmentHeight] = useState(0);
  const [segmentNumber, setSegmentNumberState] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const segmentNumberRef = useRef(segmentNumber);

  const updateScreenSize = () => {
    const smallScreen = window.innerWidth < 640;
    setIsSmallScreen(smallScreen);
    if (smallScreen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const setSegmentNumber = (newSegmentNumber) => {
    setSegmentNumberState(newSegmentNumber);
    segmentNumberRef.current = newSegmentNumber;
  };

  const smoothScroll = useCallback(
    (targetY) => {
      if (isSmallScreen) return;
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
    [scrollSpeed, isSmallScreen]
  );

  const handleScroll = useCallback(
    (event) => {
      if (isSmallScreen || isScrolling) return;

      event.preventDefault();
      setIsScrolling(true);

      const delta = event.deltaY;
      let newSegmentNumber =
        delta > 0 ? segmentNumberRef.current + 1 : segmentNumberRef.current - 1;

      if (newSegmentNumber < 0) newSegmentNumber = 0;
      if (newSegmentNumber > maxSegment) newSegmentNumber = maxSegment;

      const targetScroll = newSegmentNumber * segmentHeight;
      setSegmentNumber(newSegmentNumber);
      smoothScroll(targetScroll);

      sessionStorage.setItem("currentSegment", String(newSegmentNumber));

      setTimeout(() => {
        setIsScrolling(false);
      }, scrollTimeoutDuration);
    },
    [isScrolling, segmentHeight, maxSegment, smoothScroll, scrollTimeoutDuration, isSmallScreen]
  );

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;

    setSegmentHeight(window.innerHeight);

    const savedSegment = sessionStorage.getItem("currentSegment");
    const initialSegment = savedSegment ? parseInt(savedSegment) : 0;

    setSegmentNumber(initialSegment);
    segmentNumberRef.current = initialSegment;

    window.scrollTo(0, initialSegment * window.innerHeight);
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll, isSmallScreen]);

  return { segmentNumber, segmentHeight, setSegmentNumber, smoothScroll };
};

export default useScrollHandler;
