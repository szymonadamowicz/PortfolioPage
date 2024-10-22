import React, { useState, useEffect } from "react";
import PageOverlay from "../../PageOverlay";
import Link from "next/link";

const FourthSegment = () => {
  const bgc = "#4A68B0";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fourth-segment");
      const rect = element.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

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
      <div
        id="fourth-segment"
        className="flex flex-col md:flex-row justify-center items-center gap-10"
      >
        <div
          className={`flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg md:w-1/3 text-center h-80 transform transition-all duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-[150%] opacity-0"
          }`}
        >
          <h1 className="text-4xl font-semibold text-lime-400">
            I create user-friendly applications
          </h1>
          <p className="mt-10 text-white text-lg">
            I develop a range of web apps that are designed to enhance user
            experience and functionality. My projects emphasize clean design and
            efficient coding.
          </p>
          <div className="mt-auto">
            <Link href={"/mywork"}>
              <button className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition duration-300">
                Go to MyWork
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg md:w-1/3 text-center h-80 transform transition-all duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[150%] opacity-0"
          }`}
        >
          <h1 className="text-4xl font-semibold text-lime-400">
            Discover my professional journey
          </h1>
          <p className="mt-10 text-white text-lg">
            My CV provides insights into my skills and experiences. It showcases
            the projects I've worked on and the knowledge I've gained.
          </p>
          <div className="mt-auto">
            <a href="/CV.pdf" download>
              <button className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </PageOverlay>
  );
};

export default FourthSegment;
