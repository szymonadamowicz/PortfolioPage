import React, { useState, useEffect } from "react";
import PageOverlay from "../../PageOverlay";

const ThirdSegment = () => {
  const bgc = "#0A014F";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("third-segment");
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageOverlay bgc={bgc}>
      <div id="third-segment" className="flex flex-col items-center gap-8">
        <h1
          className={`text-6xl font-bold text-lime-400 transform transition-all duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          What have I accomplished?
        </h1>
        <div
          className={`transform transition-all duration-1000 ease-in-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ul className="text-white text-lg list-disc list-inside mx-auto max-w-2xl">
            <li>
              Frontend Developer and Computer Science student at the University
              of Gdańsk.
            </li>
            <li>Specializing in building responsive web and mobile apps.</li>
            <li>Experienced with React, React Native, and TypeScript.</li>
          </ul>
        </div>
      </div>
    </PageOverlay>
  );
};

export default ThirdSegment;
