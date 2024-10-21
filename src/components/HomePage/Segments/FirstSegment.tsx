import React from "react";
import PageOverlay from "../../PageOverlay";
import { ReactTyped } from "react-typed";

const FirstSegment = () => {
  const bgc = "#0A014F";
  return (
    <PageOverlay bgc={bgc}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-6xl font-bold text-lime-400">Hello, I'm Szymon!</h1>
        <h2 className="text-4xl text-white">
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
