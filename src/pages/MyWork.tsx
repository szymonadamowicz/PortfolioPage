import ProjectDisplay from "../components/MyWork/ProjectDisplay";

const MyWork = () => {
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
    <div>
      <div>Projects that I've taken on in the past:</div>
      <div className="w-2/4 grid grid-cols-3 gap-4 mx-auto max-w-4xl justify-items-center">
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            onClick={() => {
              console.log(index);
            }}
          >
            <ProjectDisplay projectInfo={item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
