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
    <div className="w-full h-full bg-gray-800 flex justify-center items-center pt-8">
      <div className="space-y-4 text-center py-10 w-full p-2">
        {!isHomePage && (
          <div className="text-white text-md hover:text-blue-400 transition duration-300 border-t border-b border-white py-2">
            <Link href="/">Home</Link>
          </div>
        )}
        <div className="text-white text-md hover:text-blue-400 transition duration-300 border-t border-b border-white py-2">
          <Link href="/myresume" target="_blank" rel="noopener noreferrer">
            My Resume
          </Link>
        </div>
        <div className="text-white text-md hover:text-blue-400 transition duration-300 border-t border-b border-white py-2">
          <Link href="/mywork">My Projects</Link>
        </div>
        <div className="mt-8 text-white border-t border-b border-white py-2">
          <h3 className="text-xl font-semibold underline decoration-blue-400 ">
            Contact Me!
          </h3>
          <div className="mt-4">
            <button
              onClick={handleEmailClick}
              className="text-white text-lg underline hover:text-blue-400 transition duration-300"
            >
              adamowiczszymon8@gmail.com
            </button>
          </div>
          <div className="mt-2">
            <Link
              href="https://www.linkedin.com/in/szymonadamowicz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg underline hover:text-blue-400 transition duration-300"
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
