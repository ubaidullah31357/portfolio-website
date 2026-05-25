import { FaGithub, FaGitlab, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoMdGitBranch } from "react-icons/io";

export const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="sub-hero-section">
        <div className="hero-image-container">
          <img
            src="/src/assets/Media/Images/Ubaidullah.png"
            alt="The author's image"
            className="hero-image"
          />
        </div>
        <div className="hero-intro-container">
          <p className="hero-intro-para">
            Hi, I am Ubaid Ullah<span className="green-style">.</span>
            <span className="skill">
              Frontend Web Dev<span className="pipe-animation">|</span>
            </span>
          </p>
          <div className="tech-icons">
            <FaHtml5 />
            <IoLogoCss3 />
            <IoLogoJavascript />
            <FaReact />
            <FaGithub />
          </div>
        </div>
      </div>
    </main>
  );
};
