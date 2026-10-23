import { FaAddressBook } from 'react-icons/fa';
import {
  HiAcademicCap,
  HiFolder,
  HiOutlineBriefcase,
  HiUser,
} from 'react-icons/hi';
import { IoHomeSharp, IoInformationOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

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
              <NavLink to="/">
                <IoHomeSharp /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/#about">
                <HiUser /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/#projects">
                <HiFolder /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/#experience">
                <HiAcademicCap /> Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/#contact">
                <FaAddressBook /> Contact
              </NavLink>
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
