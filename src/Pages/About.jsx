import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io";
import { HeroSection } from "../components/UI/Hero-Section";
import { IoCallSharp } from "react-icons/io5";
import { TbBrandFiverr, TbBrandLeetcode, TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <HeroSection />
      <section className="social-main-section">
        <h2>Catch Me On</h2>
        <div className="social-section">
          <div className="icons-slider">
            <NavLink
              to="https://www.linkedin.com/in/ubaid-ullah-swati/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </NavLink>
            <NavLink to="https://github.com/ubaidullah31357" target="_blank">
              <IoLogoGithub />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/ubaidullah31357?utm_source=qr&igsh=cHIwMHU5aDIwdjNi"
              target="_blank"
            >
              <IoLogoInstagram />
            </NavLink>
            <NavLink
              to="https://www.fiverr.com/sellers/ubaidullah295/"
              target="_blank"
            >
              <TbBrandFiverr />
            </NavLink>
            <NavLink to="https://leetcode.com/u/Ubaid_Ullah/" target="_blank">
              <TbBrandLeetcode />
            </NavLink>
            {/* <IoLogoWhatsapp />
          <IoCallSharp />
          <TbMailPlus /> */}
          </div>
        </div>
      </section>
    </>
  );
};
