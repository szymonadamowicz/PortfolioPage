import React, { useState, useRef } from "react";
import Submenu from "../SideBar/Submenu";

const SubmenuButton = () => {
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
    <>
      <button
        className="bg-black w-16 h-16 z-20 absolute right-0 flex items-center justify-center focus:outline-none"
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        // onClick={() => {
        //   setIsOpen((prev) => !prev);
        // }}
      >
        <div className="relative w-8 h-8 flex flex-col justify-center items-center">
          <span
            className={`block w-8 h-0.5 bg-white absolute transition-transform duration-500 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white absolute transition-transform duration-500 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`bg-gray-400 w-80 h-80 relative z-10${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <Submenu />
      </div>
    </>
  );
};

export default SubmenuButton;
