import ProjectDisplay from "../../components/MyWork/ProjectDisplay";
import PageOverlay from "../PageOverlay";
import SubmenuButton from "../SideBar/SubmenuButton";

const MyWorkPage = () => {
  const projects = [
    {
      name: "Project A",
      link: "https://example.com/projectA",
      stack: ["React", "Node.js", "TailwindCSS"],
    },
    {
      name: "Project B",
      link: "https://example.com/projectB",
      stack: ["Angular", "Firebase", "MaterialUI"],
    },
    {
      name: "Project C",
      link: "https://example.com/projectC",
      stack: ["Vue", "Django", "Bootstrap"],
    },
    {
      name: "Project D",
      link: "https://example.com/projectD",
      stack: ["React Native", "Express.js", "MongoDB"],
    },
    {
      name: "Project E",
      link: "https://example.com/projectE",
      stack: ["Next.js", "GraphQL", "Chakra UI"],
    },
  ];

  return (
    <PageOverlay bgc="#1E293B">
      <SubmenuButton/>
      <div className="h-screen justify-evenly flex flex-col items-center">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-6xl font-bold text-white">
            <span className="text-lime-400">/</span>
            mywork.
          </h1>

          <div className="text-2xl text-lime-300 tracking-wide">
            Projects that I've done in the past:
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-10 max-w-6xl justify-items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              onClick={() => {
                console.log(index);
              }}
            >
              <ProjectDisplay projectInfo={item} />
            </div>
          ))}
        </div>
      </div>
    </PageOverlay>
  );
};

export default MyWorkPage;
