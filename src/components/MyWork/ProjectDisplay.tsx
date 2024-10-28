import { useState } from "react";
import Link from "next/link";
import { projectInfoProps } from "../../types/types";

const ProjectDisplay: React.FC<projectInfoProps> = ({ projectInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="w-64 sm:72 lg:w-80 h-72 lg:h-80 bg-gray-900 text-white shadow-lg rounded-lg p-4 flex flex-col justify-between border border-gray-800 transform transition-transform hover:scale-105 cursor-pointer"
        onClick={openModal}
      >
        <div className="w-full h-2/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-4 flex items-center justify-center">
          <div className="text-xl font-bold text-center">
            {projectInfo.name}
          </div>
        </div>

        <div className="flex flex-col align-top mb-4 h-full mt-6">
          <span>
            <Link
              href={projectInfo.link}
              className="text-indigo-400 hover:underline text-lg"
            >
              GitHub Link
            </Link>
          </span>

          <div className="text-gray-300 mt-2">
            <span className="text-sm font-semibold">Stack:</span>
            <ul className="mt-2 list-disc list-inside">
              {projectInfo.stack.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl h-auto p-8">
            <div className="relative bg-gray-800 rounded-lg shadow dark:bg-gray-800">
              <div className="flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-white dark:text-white">
                  Project Details
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-700 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={closeModal}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-5 space-y-4">
                {projectInfo.desc.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex items-center p-7 border-t border-gray-600 rounded-b">
                <button
                  onClick={closeModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg p-3 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
