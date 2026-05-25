import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io";
import { HeroSection } from "../components/UI/Hero-Section";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
// import { HugeiconsIcon } from "@hugeicons/core-free-icons";

export const About = () => {
  return (
    <>
      <HeroSection />
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

          {/* Set 2 */}
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
          {/* <NavLink
            to="https://www.fiverr.com/sellers/ubaidullah295"
            target="_blank"
          >
            <HugeiconsIcon icon={FiverrIcon} />
          </NavLink> */}
          {/* <IoLogoWhatsapp />
          <IoCallSharp />
          <TbMailPlus /> */}
        </div>
      </div>
    </>
  );
};
