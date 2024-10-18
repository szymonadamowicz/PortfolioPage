import React, { useState, useRef } from "react";
import PageOverlay from "../../PageOverlay";
import Submenu from "../Submenu";

const FirstSegment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  return (
    <PageOverlay>
      <div>asd</div>
      <button
        className="bg-black w-16 h-16 absolute right-10 top-10 z-20"
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        asd
      </button>
      <div
        className={`bg-gray-400 w-80 h-80 absolute right-10 top-10 z-10 transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <Submenu/>
      </div>
    </PageOverlay>
  );
};

export default FirstSegment;
