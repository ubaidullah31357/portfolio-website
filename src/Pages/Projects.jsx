import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import projectsData from '../api/projectsData.json';
import { IoLogoGithub, IoOpenOutline, IoClose } from 'react-icons/io5';
import { FaFolderOpen } from 'react-icons/fa';

const projectTypes = [
  'All',
  'ReactJS',
  'NextJS',
  'ExpressJS',
  'WordPress',
  'React Native',
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectDialog = useRef(null);

  useEffect(() => {
    if (selectedProject) {
      projectDialog.current?.showModal();
    }
  }, [selectedProject]);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.projectType === activeFilter);

  return (
    <section
      className="my-8 flex scroll-mt-24 flex-col items-center justify-center gap-4 px-4 sm:my-10 sm:px-8"
      id="projects"
    >
      <h2 className="my-4 flex items-center gap-2 text-center text-2xl font-bold sm:gap-[0.8rem] sm:text-[1.7rem] [&>svg]:shrink-0 [&>svg]:text-[#00ff8b]">
        Projects Completed <FaFolderOpen />
      </h2>

      <div
        aria-label="Filter projects by type"
        className="flex flex-wrap justify-center gap-3"
        role="group"
      >
        {projectTypes.map((type) => (
          <button
            aria-pressed={activeFilter === type}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeFilter === type
                ? 'border-[#00ff8b] bg-[#00ff8b] font-semibold text-[#0c1d32]'
                : 'border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] hover:border-[#00ff8b]'
            }`}
            key={type}
            onClick={() => setActiveFilter(type)}
            type="button"
          >
            {type}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="py-8 text-center text-white/75">
          No {activeFilter} projects are featured here yet.
        </p>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-8">
          {filteredProjects.map((project) => (
            <article
              className="flex w-full max-w-5xl flex-col gap-4 rounded-[5px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-4 shadow-[3px_4px_8px_0_rgba(0,0,0,0.5),3px_6px_20px_0_rgba(0,0,0,0.19)] sm:gap-5 sm:p-6 lg:p-8"
              key={project.projectID}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <span className="text-sm text-[#00ff8b]">
                    {project.projectType}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">
                    <button
                      className="text-left hover:text-[#00ff8b] focus-visible:outline-2 focus-visible:outline-[#00ff8b]"
                      onClick={() => setSelectedProject(project)}
                      type="button"
                    >
                      {project.projectName}
                    </button>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    className="rounded-[5px] border border-white/30 bg-transparent px-2.5 py-1.25 text-[0.9rem] font-medium text-[#fffbfc] transition-colors hover:border-white/60 hover:bg-white/10 active:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    onClick={() => setSelectedProject(project)}
                    type="button"
                  >
                    View project details
                  </button>
                  {project.liveDemoURL && (
                    <NavLink
                      aria-label={`Live demo of ${project.projectName}`}
                      rel="noreferrer"
                      target="_blank"
                      to={project.liveDemoURL}
                    >
                      <span className="flex items-center gap-1 rounded-[5px] border-2 border-[#00ff8b] bg-[#00ff8b] px-2.5 py-1.25 text-[0.9rem] font-semibold text-[#0c1d32] shadow-[0_0_12px_rgba(0,255,139,0.2)] transition-colors hover:border-[#52ffb2] hover:bg-[#52ffb2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff8b]">
                        Live Demo <IoOpenOutline />
                      </span>
                    </NavLink>
                  )}
                  {project.sourceCodeURL && (
                    <NavLink
                      aria-label={`Source code for ${project.projectName}`}
                      rel="noreferrer"
                      target="_blank"
                      to={project.sourceCodeURL}
                    >
                      <span className="flex items-center gap-1 rounded-[5px] border-2 border-[#718096] bg-[#182d46] px-2.5 py-1.25 text-[0.9rem] font-medium text-[#fffbfc] transition-colors hover:border-[#00ff8b] hover:bg-[#203a57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff8b]">
                        Source Code <IoLogoGithub />
                      </span>
                    </NavLink>
                  )}
                </div>
              </div>

              <button
                aria-label={`View details for ${project.projectName}`}
                className="w-full border-t border-[#00ff8b] pt-4 text-left focus-visible:outline-2 focus-visible:outline-[#00ff8b]"
                onClick={() => setSelectedProject(project)}
                type="button"
              >
                <span className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                <span className="flex min-w-0 flex-col gap-4">
                    <span>{project.projectDescription}</span>
                    <span className="flex flex-col gap-2 text-sm">
                      <span>
                        <strong>Core tech: </strong>
                        {project.techUsed.coreTech}
                      </span>
                      {project.techUsed.otherTech && (
                        <span>
                          <strong>Supporting tech: </strong>
                          {project.techUsed.otherTech}
                        </span>
                      )}
                    </span>
                  </span>
                  {project.projectThumbnail && (
                    <img
                      alt={`${project.projectName} preview`}
                      className="h-auto max-h-60 w-full rounded object-cover sm:max-w-88"
                      src={project.projectThumbnail}
                    />
                  )}
                </span>
              </button>
            </article>
          ))}
        </div>
      )}

      <dialog
        aria-labelledby="project-dialog-title"
        className="m-auto max-h-[90dvh] w-[min(92vw,48rem)] overflow-y-auto rounded-xl border border-white/15 bg-[#0c1d32] p-0 text-[#fffbfc] shadow-2xl backdrop:bg-black/70"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            projectDialog.current?.close();
          }
        }}
        onClose={() => setSelectedProject(null)}
        ref={projectDialog}
      >
        {selectedProject && (
          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-sm text-[#00ff8b]">
                  {selectedProject.projectType}
                </span>
                <h3
                  className="mt-1 text-xl font-bold sm:text-2xl"
                  id="project-dialog-title"
                >
                  {selectedProject.projectName}
                </h3>
              </div>
              <button
                aria-label="Close project details"
                className="rounded p-2 hover:bg-white/10"
                onClick={() => projectDialog.current?.close()}
                type="button"
              >
                <IoClose aria-hidden="true" size={24} />
              </button>
            </div>

            {selectedProject.projectThumbnail && (
              <img
                alt={`${selectedProject.projectName} preview`}
                className="mb-6 max-h-88 w-full rounded object-cover"
                src={selectedProject.projectThumbnail}
              />
            )}
            <div className="space-y-5">
              <section>
                <h4 className="mb-1 font-bold text-[#00ff8b]">Introduction</h4>
                <p>{selectedProject.details.introduction}</p>
              </section>
              <section>
                <h4 className="mb-1 font-bold text-[#00ff8b]">Challenge</h4>
                <p>{selectedProject.details.challenge}</p>
              </section>
              <section>
                <h4 className="mb-1 font-bold text-[#00ff8b]">Solution</h4>
                <p>{selectedProject.details.solution}</p>
              </section>
              <section>
                <h4 className="mb-1 font-bold text-[#00ff8b]">Highlights</h4>
                <ul className="list-inside list-disc space-y-1">
                  {selectedProject.details.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
              <p>
                <strong>Technology: </strong>
                {selectedProject.techUsed.coreTech}
                {selectedProject.techUsed.otherTech &&
                  `, ${selectedProject.techUsed.otherTech}`}
              </p>
            </div>
            {(selectedProject.liveDemoURL || selectedProject.sourceCodeURL) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProject.liveDemoURL && (
                  <NavLink
                    className="flex items-center gap-1 rounded border-2 border-[#00ff8b] bg-[#00ff8b] px-3 py-2 font-semibold text-[#0c1d32] shadow-[0_0_12px_rgba(0,255,139,0.2)] transition-colors hover:border-[#52ffb2] hover:bg-[#52ffb2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff8b]"
                    rel="noreferrer"
                    target="_blank"
                    to={selectedProject.liveDemoURL}
                  >
                    Live Demo <IoOpenOutline />
                  </NavLink>
                )}
                {selectedProject.sourceCodeURL && (
                  <NavLink
                    className="flex items-center gap-1 rounded border-2 border-[#718096] bg-[#182d46] px-3 py-2 font-medium text-[#fffbfc] transition-colors hover:border-[#00ff8b] hover:bg-[#203a57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ff8b]"
                    rel="noreferrer"
                    target="_blank"
                    to={selectedProject.sourceCodeURL}
                  >
                    Source Code <IoLogoGithub />
                  </NavLink>
                )}
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
};
