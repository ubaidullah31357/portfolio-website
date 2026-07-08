import { About } from './About';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <About />
      <Projects />
      <Experience />
      <div className="mail-section">
        <NavLink to="contact">
          <button className="mail-button">
            Contact Us <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
    </>
  );
};
