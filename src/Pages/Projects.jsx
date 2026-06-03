import { NavLink } from 'react-router-dom';
import projectsData from '../api/projectsData.json';
import {
  IoCodeSlash,
  IoLogoGithub,
  IoOpen,
  IoOpenOutline,
} from 'react-icons/io5';
import { FaFolderOpen, FaLongArrowAltRight } from 'react-icons/fa';
import { Github } from '@hugeicons/core-free-icons';
export const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <h2 className="heading-and-icon">
          Projects Completed <FaFolderOpen />
        </h2>
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
                    <NavLink to={project.sourceCodeURL} target="_blank">
                      <button>
                        Source Code <IoLogoGithub />
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="project-hidden-part">
                  <div className="project-description">
                    <p className="project-description-para">
                      {project.projectDescription}
                    </p>
                    <div className="project-description-tech">
                      <p>
                        <span className="project-tech-used">Core Tech: </span>
                        {project.techUsed.coreTech}
                      </p>
                      {project.techUsed.otherTech != '' && (
                        <p>
                          <span className="project-tech-used">
                            Helping Tech:{' '}
                          </span>
                          {project.techUsed.otherTech}
                        </p>
                      )}
                    </div>
                  </div>
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
