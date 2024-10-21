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
      window.location.href =
        "mailto:adamowiczszymon8@gmail.com?subject=Hello&body=Let's%20connect!";
    }
  };

  return (
    <div className="w-full h-full bg-blue-400 justify-center flex">
      <div className="mt-20">
        {!isHomePage && (
          <div>
            <Link href="/">Home</Link>
          </div>
        )}
        <div>
          <Link href="/myresume" target="_blank" rel="noopener noreferrer">
              My Resume
          </Link>
        </div>
        <div>
          <Link href="/mywork">My Projects</Link>
        </div>
        <div className="mt-6">
          Contact Me!
          <div>
            <button onClick={handleEmailClick}>
              adamowiczszymon8@gmail.com
            </button>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/szymonadamowicz/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
