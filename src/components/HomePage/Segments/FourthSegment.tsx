import React, { useState, useEffect } from "react";
import PageOverlay from "../../PageOverlay";
import Link from "next/link";

const FourthSegment = ({ isOpen }) => {
  const bgc = "#4A68B0";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fourth-segment");

      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

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
        id="fourth-segment"
        className={`flex flex-col items-center gap-8 absolute w-[350px] sm:relative md:w-3/4 lg:w-2/4 ${isOpen ? "hidden" : ""}`}
      >
        <div
          className={`flex flex-col items-center bg-gray-800 p-2 sm:p-6 rounded-lg shadow-lg text-center w-4/5 sm:w-full h-64 sm:h-96 transform transition-all duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-[5%] opacity-0"
          }`}
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-lime-400">
            I create user-friendly applications
          </h1>
          <p className="mt-4 sm:mt-16 md:mt-12 lg:mt-16 text-sm sm:text-base text-white">
            I develop a range of web apps that are designed to enhance user
            experience and functionality. My projects emphasize clean design and
            efficient coding.
          </p>
          <div className="absolute bottom-6">
            <Link href={"/mywork"}>
              <button className="px-4 sm:px-10 py-2 sm:py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition duration-300">
                Go to MyWork
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`relative flex flex-col items-center bg-gray-800 p-2 sm:p-6 rounded-lg shadow-lg text-center w-4/5 sm:w-full h-64 sm:h-96 transform transition-all duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[5%] opacity-0"
          }`}
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-lime-400">
            Discover my professional journey
          </h1>
          <p className="mt-4 sm:mt-16 md:mt-12 lg:mt-16 text-sm sm:text-base text-white">
            My CV provides insights into my skills and experiences. It showcases
            the projects I've worked on and the knowledge I've gained.
          </p>
          <div className="absolute bottom-6">
            <a href="/CV.pdf" download>
              <button className="px-4 sm:px-10 py-2 sm:py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition duration-300">
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
