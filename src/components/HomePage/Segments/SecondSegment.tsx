import React, { useState, useEffect } from "react";
import PageOverlay from "../../PageOverlay";

const SecondSegment = ({ isOpen }) => {
  const bgc = "#4A68B0";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("second-segment");

      if (element) {
        const rect = element.getBoundingClientRect();
        const margin = -500;

        const isInView =
          rect.top <= window.innerHeight - margin && rect.bottom >= margin;

        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageOverlay bgc={bgc}>
      <div
        id="second-segment"
        className={`flex flex-col items-center gap-8 absolute w-[250px] sm:relative md:w-3/4 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <h1
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-lime-400 transform transition-all duration-1000 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          Who am I?
        </h1>
        <p
          className={`text-sm sm:text-md md:text-lg lg:text-xl text-white transform transition-all duration-1000 ease-in-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          I'm a dedicated Frontend Developer and a Computer Science student at
          the University of Gdańsk, specializing in Web Applications. I have
          experience in building responsive and functional mobile and web
          applications using React, React Native, TypeScript, and other web
          technologies. I've worked on numbers of features in various projects,
          with a focus on user-friendly design. I'm a strong collaborator with
          experience working in remote teams. Committed to continuous learning,
          currently expanding knowledge in backend development and cloud
          technologies.
        </p>
      </div>
    </PageOverlay>
  );
};

export default SecondSegment;
