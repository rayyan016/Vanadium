import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 px-10">
        <ProjectCard
          src="/Proj1.png"
          title="Nasa APOD"
          description="Web application that fetches the Astronomy Picture of the Day (APOD) from the NASA API and displays it using React and Tailwind CSS."
          url="https://github.com/rayyan016/Oxygen"
        />
        <ProjectCard
          src="/Proj2.png"
          title="Facebook Frontend Clone"
          description="A clone of Facebook login page frontend created in order to understand working of Tailwind CSS."
          url="https://github.com/rayyan016/facebookFrontendClone"
        />
        <ProjectCard
          src="/Proj3.png"
          title="Space Themed Website"
          description="This project was created with the goal of learning about the working of Three.js and animations in the frontend. It also utilizes Tailwind CSS and TypeScript for enhanced styling and type safety."
          url="https://github.com/rayyan016/Vanadium"
        />
      </div>
    </div>
  );
};

export default Projects;
