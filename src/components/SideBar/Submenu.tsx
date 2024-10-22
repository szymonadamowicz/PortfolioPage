import Link from "next/link";
import { useRouter } from "next/router";

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
    <div className="w-full h-full bg-white flex flex-col items-center py-10">
      <div className="text-center w-full px-4">
        {!isHomePage && (
          <div className="text-black text-md hover:text-blue-400 transition duration-300 border-b border-gray-300 py-2">
            <Link className="block" href="/">Home</Link>
          </div>
        )}
        <div className="text-black text-md hover:text-blue-400 transition duration-300 border-b border-gray-300 py-2">
          <Link className="block" href="/myresume" target="_blank" rel="noopener noreferrer">
            My Resume
          </Link>
        </div>
        <div className="text-black text-md hover:text-blue-400 transition duration-300 border-b border-gray-300 py-2">
          <Link className="block" href="/mywork">My Projects</Link>
        </div>
        <div className="mt-6 text-lime-400 border-t border-b border-gray-300 pb-4 pt-4">
          <h3 className="text-2xl font-semibold mb-2">
            Contact Me!
          </h3>
          <button
            onClick={handleEmailClick}
            className="text-black text-lg underline hover:text-blue-400 transition duration-300"
          >
            adamowiczszymon8@gmail.com
          </button>
          <div className="mt-2">
            <Link
              href="https://www.linkedin.com/in/szymonadamowicz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-lg underline hover:text-blue-400 transition duration-300"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
