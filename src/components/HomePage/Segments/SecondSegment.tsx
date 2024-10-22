import React, { useState, useEffect } from "react";
import PageOverlay from "../../PageOverlay";

const SecondSegment = () => {
  const bgc = "#4A68B0";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("second-segment");
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
      <div id="second-segment" className="flex flex-col items-center gap-8">
        <h1
          className={`text-6xl font-bold text-lime-400 transform transition-all duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          Who am I?
        </h1>
        <p
          className={`text-xl text-white w-2/4 transform transition-all duration-1000 ease-in-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          I'm a dedicated Frontend Developer and a Computer Science student at
          the University of Gdańsk, specializing in Web Applications. I have
          experience in building responsive and functional mobile and web
          applications using React, React Native, TypeScript and other web
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
