import React from "react";
import PageOverlay from "../../PageOverlay";
import Link from "next/link";

const FourthSegment = () => {
  const bgc = "#262626";
  return (
    <PageOverlay bgc={bgc}>
      <div className="flex flex-col md:flex-row justify-center gap-20">
        <div className="text-white text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-semibold">
            Brief preview of my best projects
          </h1>
          <div className="mt-4">
            <Link href={"/mywork"}>
              <button className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-md">
                Go to MyWork
              </button>
            </Link>
          </div>
        </div>

        <div className="text-white text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-semibold">More info in my CV</h1>
          <div className="mt-4">
            <a href="/CV.pdf" download>
              <button className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-md">
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
