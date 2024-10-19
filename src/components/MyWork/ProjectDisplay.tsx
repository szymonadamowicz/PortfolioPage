import Link from "next/link";
import { projectInfoProps } from "../../types/types";

const ProjectDisplay: React.FC<projectInfoProps> = ({ projectInfo }) => {
  return (
    <div className="w-72 h-72 bg-white shadow-md rounded-lg p-2 flex flex-col border border-gray-200">
      <div className="w-full h-2/5 bg-red-200 rounded-md p-1 flex items-center justify-center">
        <div className="text-lg font-semibold text-gray-800 text-center">
          {projectInfo.name}
        </div>
      </div>

      <div className="mt-5">
        <Link href={projectInfo.link}>GitHub Link</Link>

        <div className="text-gray-400">
          {projectInfo.stack.map((item, index) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
