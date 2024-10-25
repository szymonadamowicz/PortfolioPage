import React, { useEffect, useRef } from "react";
import Submenu from "./Submenu";
import { SubmenuProps } from "../../types/types";

const SubmenuButton: React.FC<SubmenuProps> = ({
  segments,
  goToSegment,
  isOpen,
  setIsOpen,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    if (window.innerWidth > 1280) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 250);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 1280) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleClickMobile = () => {
    if (window.innerWidth < 1280) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="fixed right-0 top-0 xl:right-12 xl:top-12">
      <button
        className="w-14 h-14 z-50 absolute right-0 flex items-center justify-center focus:outline-none"
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onClick={handleClickMobile}
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
        className={`w-screen h-screen xl:h-80 xl:w-80 relative z-10 ${
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
