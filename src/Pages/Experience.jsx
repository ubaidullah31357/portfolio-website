import { HiAcademicCap, HiOutlineBookOpen } from 'react-icons/hi';

export const Experience = () => {
  return (
    <>
      <section className="experience-section" id="experience">
        <h3 className="heading-and-icon">
          Learned Experience <HiOutlineBookOpen />
        </h3>
        <div className="learned-experience-container">
          <ul>
            <li>
              <strong>Responsive & Mobile-First Development</strong> — Creating
              layouts that adapt across smartphones, tablets, and desktops
            </li>
            <li>
              <strong>State Management Lifecycle</strong> — Handling
              application-wide global states efficiently with Redux Toolkit or
              Context API.
            </li>
            <li>
              <strong>Interactive Web Applications</strong> — Implementing clean
              UI transitions, dynamic animations, and form validations to engage
              users
            </li>
            <li>
              <strong>Git and GitHub</strong> — Managing codebases, branching
              workflows, and tracking changes via Git and GitHub
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
