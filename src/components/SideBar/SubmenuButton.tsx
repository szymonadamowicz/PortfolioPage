import React, { useState, useRef } from "react";
import Submenu from "./Submenu";

interface SubmenuProps {
  segments?: number;
  goToSegment?: (index: number) => void;
}

const SubmenuButton: React.FC<SubmenuProps> = ({ segments, goToSegment }) => {
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
  <div className="fixed right-12 top-12">
    <button
      className="w-14 h-14 z-20 absolute right-0 flex items-center justify-center focus:outline-none"
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <span
          className={`block w-8 h-0.5 absolute transition-transform duration-500 ease-in-out ${
            isOpen ? "bg-black rotate-45" : "bg-white -translate-y-2"
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 absolute transition-transform duration-500 ease-in-out ${
            isOpen ? "bg-black -rotate-45" : "bg-white translate-y-2"
          }`}
        ></span>
      </div>
    </button>

    <div
      className={`bg-gray-400 w-80 h-80 relative z-10 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <Submenu segments={segments} goToSegment={goToSegment} />
    </div>
  </div>
);

};

export default SubmenuButton;
