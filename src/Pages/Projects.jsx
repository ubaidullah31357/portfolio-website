import { NavLink } from 'react-router-dom';
import projectsData from '../api/projectsData.json';
import {
  IoCodeSlash,
  IoLogoGithub,
  IoOpen,
  IoOpenOutline,
} from 'react-icons/io5';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Github } from '@hugeicons/core-free-icons';
export const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <h1>Projects Completed</h1>
        <div className="projects">
          {projectsData.map((project) => {
            return (
              <article className="indivisual-project" key={project.projectID}>
                <div className="project-shown-part">
                  <h3>{project.projectName}</h3>
                  <div className="projects-url">
                    <NavLink to={project.liveDemoURL} target="_blank">
                      <button>
                        Live Demo <IoOpenOutline />
                      </button>
                    </NavLink>
                    <NavLink to={project.su} target="_blank">
                      <button>
                        Source Code <IoLogoGithub />
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="project-hidden-part">
                  <p className="project-description">
                    {project.projectDescription}
                  </p>
                  <figure className="indivisual-project-img">
                    <img
                      src={project.projectThumbnail}
                      alt={`${project.projectName} thumbnail`}
                    />
                  </figure>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
