import React from "react";
import PageOverlay from "../../PageOverlay";
import { ReactTyped } from "react-typed";

const FirstSegment = ({isOpen}) => {
  const bgc = "#0A014F";
  return (
    <PageOverlay bgc={bgc}>
      <div id="first-segment" className={`flex flex-col items-center gap-8 absolute w-[350px] sm:relative md:w-3/4 ${isOpen ? "hidden" : ""}`}>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-lime-400 text-center">
          Hello, I'm Szymon!
        </h1>

        <h2 className="text-xl sm:text-3xl lg:text-4xl text-white text-center">
          I'm a{" "}
          <ReactTyped
            strings={["Developer", "Student", "Designer"]}
            typeSpeed={100}
            loop
            backSpeed={50}
            cursorChar=">"
            showCursor={true}
          />
        </h2>
      </div>
    </PageOverlay>
  );
};

export default FirstSegment;
