import { FaAddressBook } from 'react-icons/fa';
import {
  HiAcademicCap,
  HiFolder,
  HiOutlineBriefcase,
  HiUser,
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-y-3 bg-[#0c1d32] px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8 lg:py-4"
      id="header"
    >
      <div className="order-0 shrink-0 text-2xl font-semibold sm:text-[1.6rem]">
        <p>
          Ubaid <span className="font-bold text-[#00ff8b]">/.</span>
        </p>
      </div>
      <div className="contents lg:flex lg:items-center lg:gap-8">
        <nav className="order-1 w-full lg:order-0 lg:w-auto">
          <ul className="flex flex-wrap justify-center gap-0.5 sm:gap-[0.6rem]">
            <li>
              <NavLink
                className="flex items-center justify-center gap-1 whitespace-nowrap border border-[#0c1d32] px-1.5 py-1 text-xs text-[#fffbfc] hover:rounded-[15px] hover:border-[#00ff8b] hover:bg-[#00ff8b] hover:text-black sm:gap-[0.4rem] sm:px-2 sm:py-[0.2rem] sm:text-base"
                to="/#about"
              >
                <HiUser /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center justify-center gap-1 whitespace-nowrap border border-[#0c1d32] px-1.5 py-1 text-xs text-[#fffbfc] hover:rounded-[15px] hover:border-[#00ff8b] hover:bg-[#00ff8b] hover:text-black sm:gap-[0.4rem] sm:px-2 sm:py-[0.2rem] sm:text-base"
                to="/#projects"
              >
                <HiFolder /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center justify-center gap-1 whitespace-nowrap border border-[#0c1d32] px-1.5 py-1 text-xs text-[#fffbfc] hover:rounded-[15px] hover:border-[#00ff8b] hover:bg-[#00ff8b] hover:text-black sm:gap-[0.4rem] sm:px-2 sm:py-[0.2rem] sm:text-base"
                to="/#experience"
              >
                <HiAcademicCap /> Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center justify-center gap-1 whitespace-nowrap border border-[#0c1d32] px-1.5 py-1 text-xs text-[#fffbfc] hover:rounded-[15px] hover:border-[#00ff8b] hover:bg-[#00ff8b] hover:text-black sm:gap-[0.4rem] sm:px-2 sm:py-[0.2rem] sm:text-base"
                to="/#contact"
              >
                <FaAddressBook /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="order-0">
          <button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-32 items-center justify-center gap-1.25 rounded-[3px] border border-[#00ff8b] bg-[#00ff8b] text-[0.9rem] font-semibold text-black hover:bg-[#07e983]"
            >
              Visit Resume <HiOutlineBriefcase />
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};
