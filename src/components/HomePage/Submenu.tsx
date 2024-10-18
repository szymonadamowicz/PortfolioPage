import Link from "next/link";
import { useRouter } from "next/router";

const Submenu = () => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  return (
    <div className="w-full h-full bg-blue-400 justify-center flex">
      <div className="mt-20">
        {!isHomePage && (
          <div>
            <Link href={"/"}>Home</Link>
          </div>
        )}
        <div>
          <Link href={"MyResume"}>My Resume</Link>
        </div>
        <div>
          <Link href={"MyWork"}>My Projects</Link>
        </div>
        <div className="mt-6">
            Contact Me!
            <div >
                {/*TODO: onClick scroll to contact info */}
                adamowiczszymon8@gmail.com
            </div>
            <div>
            <Link href={"https://www.linkedin.com/in/szymonadamowicz/"}>Linkedin</Link>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Submenu;
