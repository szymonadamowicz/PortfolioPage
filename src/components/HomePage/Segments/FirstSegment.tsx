import React from "react";
import PageOverlay from "../../PageOverlay";
import {ReactTyped} from "react-typed";

// #0A0F29
// #2C003E
// #004C4C
// #1E1E1E
// #3C1F1F

const FirstSegment = () => {
  const bgc = "red"
  return (
    <PageOverlay bgc={bgc}>
      <div>
        info about me
      </div>
      <h1>
        I'm a{" "}
        <ReactTyped
          strings={["Developer", "Writer", "Designer"]}
          typeSpeed={100}
          loop
          backSpeed={50}
          cursorChar=">"
          showCursor={true}
        />
      </h1>{" "}
    </PageOverlay>
  );
};

export default FirstSegment;
