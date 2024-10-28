import { useState } from "react";
import ProjectDisplay from "../../components/MyWork/ProjectDisplay";
import PageOverlay from "../PageOverlay";
import SubmenuButton from "../SideBar/SubmenuButton";

const MyWorkPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      name: "PortfolioPage",
      GitLink: "https://github.com/szymonadamowicz/PortfolioPage",
      VercelLink: "https://www.szymonadamowicz.com",
      stack: ["React", "TypeScript", "TailwindCSS", "Next.js"],
      desc: "1",
    },
    {
      name: "UserManagementTable",
      GitLink: "https://github.com/szymonadamowicz/UserManagementTable",
      VercelLink: "https://shelter-frontend-two.vercel.app",
      stack: ["React", "TypeScript", "Redux"],
      desc: `User Management Table is a React application designed to manage users by displaying and filtering user data from an API. The app allows users to view user information such as name, username, email, and phone, with advanced filtering options that update in real-time as input is provided.\n It uses Redux Toolkit to manage the state of the application, ensuring efficient handling of data. TypeScript integration ensures type safety throughout the app, reducing runtime errors. App includes Jest unit tests to verify core functionality. The project uses Tailwind CSS for styling and layout, delivering a clean and modern user interface.`,
    },

    {
      name: "ITCards",
      GitLink: "https://github.com/szymonadamowicz/ITCards",
      VercelLink: "https://itcards.vercel.app",
      stack: ["React", "TypeScript", "MaterialUI", "Firebase"],
      desc: `ITCards is an interactive learning platform designed to help developers prepare for technical interviews and expand their programming knowledge across various technologies such as JavaScript, React, Angular, Node.js, PHP, and C#. The platform offers features like interactive flashcards for studying technical concepts, an interview preparation mode with common questions and answers, a learning mode for in-depth study, support for multiple programming languages, progress tracking, responsive design using Material-UI, user authentication with Firebase, smooth animations via Framer Motion, and localization with i18next.\n The app is built using a robust technology stack that includes React for the front-end, Material-UI for styling and responsive design, Framer Motion for animations, React Router for navigation, and Firebase for authentication.`,
    },
    {
      name: "ShelterFrontend",
      GitLink: "https://github.com/szymonadamowicz/ShelterFrontend",
      VercelLink: "https://shelter-frontend-two.vercel.app",
      stack: ["React", "TypeScript", "Axios", "React Router"],
      desc: `Shelter Finder App is a React application designed to help users find and adopt pets from shelters. The app allows users to browse available animals, view detailed information about specific pets, and explore shelters using an interactive map. Users can search for both pets and shelters, with filtering and pagination features to enhance the user experience.\n The app uses React Router for navigation, Axios for backend requests, Material UI and for styling, and Leaflet for the map interface. Built with TypeScript, the app also incorporates testing with React Testing Library and Jest.`,
    },
    {
      name: "CatBrowser",
      GitLink: "https://github.com/szymonadamowicz/CatBrowser",
      VercelLink: "",
      stack: ["React", "JavaScript"],
      desc: `The Cat Gallery App is a React application that allows users to browse and filter a collection of cat images. The app includes navigation features to browse through the images using 'Next' and 'Previous' buttons, and also offers filters to show shy cats or hide troublemaking ones. Users are greeted with random interactive messages that pop up as they navigate the gallery.\n The app uses React for the front-end framework, and inline styling for the layout.`,
    },
    {
      name: "Chess",
      GitLink: "https://github.com/szymonadamowicz/Chess",
      VercelLink: "",
      stack: ["Python"],
      desc: `Chess task involves generating an 8x8 board with 'k' randomly placed queens (maximum 5) and one pawn. Each piece is placed in a different position. The program verifies if the pawn is beaten by any queen and displays the positions of the queens that can beat the pawn. Additional features allow the user to re-draw the pawn’s position, remove a queen, and re-verify the beating.\n The entire program was implemented in Python.`,
    },
  ];

  return (
    <PageOverlay bgc="#0A014F">
      <SubmenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`h-full min-h-screen w-3/4 justify-between flex flex-col items-center pb-8 ${
          isOpen && window.innerWidth < 1280 ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-12 sm:gap-16 px-4 mt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            <span className="text-lime-400">/</span>
            mywork.
          </h1>

          <div className="text-2xl sm:text-2xl text-lime-400 tracking-wide text-center mb-12">
            Projects that I've done in the past:
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl justify-items-center px-0">
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