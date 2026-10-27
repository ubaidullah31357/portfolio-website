import { FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoWordpress } from 'react-icons/io';
import { TypedComponent } from './typedComponent';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpo, SiExpress, SiMysql, SiTypescript } from 'react-icons/si';

export const HeroSection = () => {
  return (
    <main
      className="flex w-full items-center justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:pt-24 lg:pb-4 md:mt-10"
      id="about"
    >
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center lg:gap-[10%] lg:text-left md:flex-row">
        <div className="order-1 h-48 w-48 shrink-0 rounded-full bg-[radial-gradient(circle,#1973d1_0%,#0c1d32_70%)] sm:h-56 sm:w-56 lg:h-62.5 lg:w-62.5">
          <img
            src="/Images/Ubaidullah.png"
            alt="The author's image"
            className="relative bottom-16 h-auto w-full sm:bottom-20.5"
          />
        </div>
        <div className="order-0 w-full lg:w-[55%] mb-5 md:mb-0">
          <div className="font-audiowide text-xl sm:text-2xl lg:text-[2rem]">
            Hi, I am Ubaid Ullah
            <span className="font-bold text-[#00ff8b]">.</span>
            <TypedComponent />
          </div>
          <div className="my-4 flex flex-wrap items-center justify-center gap-4 text-2xl lg:justify-start">
            <SiTypescript />
            <FaReact />
            <RiNextjsFill />
            <SiExpress />
            <SiMysql />
            <IoLogoWordpress />
            <SiExpo />
            <FaGithub />
          </div>
        </div>
      </div>
    </main>
  );
};
