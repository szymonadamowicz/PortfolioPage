import Link from "next/link";
import { useRouter } from "next/router";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

interface SubmenuProps {
  segments?: number;
  goToSegment?: (index: number) => void;
}

const Submenu: React.FC<SubmenuProps> = ({ segments, goToSegment }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const handleEmailClick = () => {
    if (isHomePage && goToSegment) {
      goToSegment(segments || 0);
    } else {
      window.open(
        "mailto:adamowiczszymon8@gmail.com?subject=Hello&body=Let's%20connect!",
        "_blank"
      );
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col xl:items-center py-10 xl:py-0 xl:h-full">
      <div className="flex flex-col h-1/2 w-full justify-end items-center mt-12 gap-4">
        {!isHomePage && (
        <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl hover:text-blue-400 transition duration-300">
            <Link className="block" href="/">
              Home
            </Link>
          </div>
        )}
        <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl hover:text-blue-400 transition duration-300">
          <Link
            className="block"
            href="/myresume"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </Link>
        </div>
        <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl hover:text-blue-400 transition duration-300">
          <Link className="block" href="/mywork">
            My Projects
          </Link>
        </div>
      </div>

      <div className="items-center justify-end mb-12 flex flex-col gap-4 w-full h-1/2">
        <Link
          href="https://www.linkedin.com/in/szymonadamowicz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl flex items-center space-x-2 underline hover:text-blue-400 transition duration-300"
        >
          <div className="mt-1">
            <FaLinkedin />
          </div>
          <span>LinkedIn</span>
        </Link>
        <div
          onClick={handleEmailClick}
          className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-lg flex items-center space-x-2 underline hover:text-blue-400 transition duration-300 cursor-pointer"
        >
          <div className="mt-1">
            <FaEnvelope />
          </div>
          <span>adamowiczszymon8@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
