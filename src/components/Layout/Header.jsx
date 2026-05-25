import { HiOutlineBriefcase } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-section">
      <div className="logo">
        <p>
          Ubaid <span className="green-style">/.</span>
        </p>
      </div>
      <div className="navbar-and-btn">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
        <div className="resume-btn">
          <button>
            Visit Resume <HiOutlineBriefcase />
          </button>
        </div>
      </div>
    </header>
  );
};
