import { FaBriefcase } from 'react-icons/fa';
import projectsData from '../api/projectsData.json';

export const Experience = () => {
  const wordpressProjects = projectsData.filter(
    (project) => project.projectType === 'WordPress'
  );

  return (
    <>
      <section
        className="flex scroll-mt-24 flex-col items-center justify-center px-4 py-8 sm:px-8"
        id="experience"
      >
        <h3 className="my-4 flex items-center gap-2 text-center text-2xl font-bold sm:gap-[0.8rem] sm:text-[1.7rem] [&>svg]:shrink-0 [&>svg]:text-[#00ff8b]">
          Hands-on Experience <FaBriefcase />
        </h3>
        <article className="mt-4 w-full max-w-3xl rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-4 shadow-[3px_4px_8px_0_rgba(0,0,0,0.5)] sm:p-6 md:p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h4 className="text-xl font-bold">
                MERN Stack &amp; WordPress Intern
              </h4>
              <p className="mt-1 text-[#00ff8b]">QuantumVerse</p>
            </div>
            <p className="text-sm text-white/75">July – Present</p>
          </div>
          <p className="mt-4">
            Gaining hands-on experience across MERN stack and WordPress
            development, with {wordpressProjects.length} completed WordPress
            projects.
          </p>
          <h5 className="mt-6 font-bold">Projects completed</h5>
          <ul className="mt-3 flex flex-col gap-2">
            {wordpressProjects.map((project) => (
              <li
                className="flex flex-wrap items-center justify-between gap-2"
                key={project.projectID}
              >
                <span className="font-medium">{project.projectName}</span>
                {project.liveDemoURL && (
                  <a
                    className="text-sm text-[#00ff8b] underline decoration-transparent underline-offset-4 transition hover:decoration-current focus-visible:outline-2 focus-visible:outline-[#00ff8b]"
                    href={project.liveDemoURL}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View project
                  </a>
                )}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};
