import { NavLink } from "react-router-dom";
import projectsData from "../api/projectsData.json";
import { IoCodeSlash, IoLogoGithub, IoOpen, IoOpenOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Github } from "@hugeicons/core-free-icons";
export const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <h1>Projects Completed</h1>
        <div className="projects">
          {projectsData.map((project) => {
            return (
              <article className="indivisual-project" key={project.projectID}>
                <figure className="indivisual-project-img">
                  <img
                    src={project.projectThumbnail}
                    alt={project.projectName, "thumbnail"}
                  />
                  <figcaption>{project.projectName}</figcaption>
                </figure>
                <div className="projects-url">
                  <NavLink to={project.liveDemoURL}>
                    <button>Live Demo <IoOpenOutline /></button>
                  </NavLink>
                  <NavLink to={project.su}>
                    <button>Source Code <IoLogoGithub /></button>
                  </NavLink>
                </div>
                <NavLink to={/projects/di}>
                  <button className="project-details-btn">See Details <FaLongArrowAltRight /></button>
                </NavLink>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
