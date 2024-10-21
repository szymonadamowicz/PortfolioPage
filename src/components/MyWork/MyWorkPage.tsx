import ProjectDisplay from "../../components/MyWork/ProjectDisplay";
import PageOverlay from "../PageOverlay";
import SubmenuButton from "../SideBar/SubmenuButton";

const MyWorkPage = () => {
  const projects = [
    {
      name: "PortfolioPage",
      link: "https://github.com/szymonadamowicz/PortfolioPage",
      stack: ["React", "TypeScript", "TailwindCSS", "Next.js"],
      desc: "1",
    },
    {
      name: "UserManagementTable",
      link: "https://github.com/szymonadamowicz/UserManagementTable",
      stack: ["React", "TypeScript", "Redux"],
      desc: `User Management Table is a React application designed to manage users by displaying and filtering user data from an API. The app allows users to view user information such as name, username, email, and phone, with advanced filtering options that update in real-time as input is provided.\n It uses Redux Toolkit to manage the state of the application, ensuring efficient handling of data. TypeScript integration ensures type safety throughout the app, reducing runtime errors. App includes Jest unit tests to verify core functionality. The project uses Tailwind CSS for styling and layout, delivering a clean and modern user interface.`,
    },

    {
      name: "ITCards",
      link: "https://github.com/szymonadamowicz/ITCards",
      stack: ["React", "TypeScript", "MaterialUI", "Firebase"],
      desc: `ITCards is an interactive learning platform designed to help developers prepare for technical interviews and expand their programming knowledge across various technologies such as JavaScript, React, Angular, Node.js, PHP, and C#. The platform offers features like interactive flashcards for studying technical concepts, an interview preparation mode with common questions and answers, a learning mode for in-depth study, support for multiple programming languages, progress tracking, responsive design using Material-UI, user authentication with Firebase, smooth animations via Framer Motion, and localization with i18next.\n The app is built using a robust technology stack that includes React for the front-end, Material-UI for styling and responsive design, Framer Motion for animations, React Router for navigation, and Firebase for authentication.`,
    },
    {
      name: "ShelterFrontend",
      link: "https://github.com/szymonadamowicz/ShelterFrontend",
      stack: ["React", "TypeScript", "Axios", "React Router"],
      desc: `Shelter Finder App is a React application designed to help users find and adopt pets from shelters. The app allows users to browse available animals, view detailed information about specific pets, and explore shelters using an interactive map. Users can search for both pets and shelters, with filtering and pagination features to enhance the user experience.\n The app uses React Router for navigation, Axios for backend requests, Material UI and for styling, and Leaflet for the map interface. Built with TypeScript, the app also incorporates testing with React Testing Library and Jest.`,
    },
    {
      name: "CatBrowser",
      link: "https://github.com/szymonadamowicz/CatBrowser",
      stack: ["React", "JavaScript"],
      desc: `The Cat Gallery App is a React application that allows users to browse and filter a collection of cat images. The app includes navigation features to browse through the images using 'Next' and 'Previous' buttons, and also offers filters to show shy cats or hide troublemaking ones. Users are greeted with random interactive messages that pop up as they navigate the gallery.\n The app uses React for the front-end framework, and inline styling for the layout.`,
    },
    {
      name: "Chess",
      link: "https://github.com/szymonadamowicz/Chess",
      stack: ["Python"],
      desc: `Chess task involves generating an 8x8 board with 'k' randomly placed queens (maximum 5) and one pawn. Each piece is placed in a different position. The program verifies if the pawn is beaten by any queen and displays the positions of the queens that can beat the pawn. Additional features allow the user to re-draw the pawn’s position, remove a queen, and re-verify the beating.\n The entire program was implemented in Python.`,
    },
  ];

  return (
    <PageOverlay bgc="#0A014F">
      <SubmenuButton />
      <div className="h-screen justify-evenly flex flex-col items-center">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-6xl font-bold text-white">
            <span className="text-lime-400">/</span>
            mywork.
          </h1>

          <div className="text-2xl text-lime-400 tracking-wide">
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
