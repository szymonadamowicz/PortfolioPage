import Link from "next/link";
import { projectInfoProps } from "../../types/types";

const ProjectDisplay: React.FC<projectInfoProps> = ({ projectInfo }) => {
  return (
    // TODO: onClick open preview of a project
    <div className="w-80 h-80 bg-gray-900 text-white shadow-lg rounded-lg p-4 flex flex-col justify-between border border-gray-800 transform transition-transform hover:scale-105">
      <div className="w-full h-2/5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-4 flex items-center justify-center">
        <div className="text-xl font-bold text-center">{projectInfo.name}</div>
      </div>

      <div className="flex flex-col justify-between mb-4">
        <Link
          href={projectInfo.link}
          className="text-indigo-400 hover:underline text-lg"
        >
          GitHub Link
        </Link>
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
  );
};

export default ProjectDisplay;
