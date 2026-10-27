import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { HeroSection } from '../components/UI/Hero-Section';
import { TbBrandFiverr, TbBrandLeetcode } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export const About = () => {
  return (
    <>
      <HeroSection />

      <section className="mx-auto mt-0 w-full max-w-5xl scroll-mt-24 px-4 py-4 sm:my-8 sm:px-8 md:my-8">
        <h2 className="flex items-center justify-center gap-3 text-center text-2xl font-bold sm:text-[1.7rem]">
          Connect With Me
          <FaLink className="shrink-0 text-[#00ff8b]" />
        </h2>

        <div className="mt-0 lg:mt-6 flex min-h-24 items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-3xl sm:gap-x-8 sm:text-[2.5rem]">
            <a
              className="text-white transition-all duration-200 hover:-translate-y-2 hover:text-[#00ff8b]"
              href="https://www.linkedin.com/in/ubaid-ullah-swati/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin />
            </a>

            <a
              className="text-white transition-all duration-200 hover:-translate-y-2 hover:text-[#00ff8b]"
              href="https://github.com/ubaidullah31357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub />
            </a>

            <a
              className="text-white transition-all duration-200 hover:-translate-y-2 hover:text-[#00ff8b]"
              href="https://www.instagram.com/ubaidullah31357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IoLogoInstagram />
            </a>

            <a
              className="text-white transition-all duration-200 hover:-translate-y-2 hover:text-[#00ff8b]"
              href="https://www.fiverr.com/sellers/ubaidullah295/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
            >
              <TbBrandFiverr />
            </a>

            <a
              className="text-white transition-all duration-200 hover:-translate-y-2 hover:text-[#00ff8b]"
              href="https://leetcode.com/u/Ubaid_Ullah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <TbBrandLeetcode />
            </a>

            <a
              className="text-white transition-all duration-200 hover:-translate-y-2 hover:text-[#00ff8b]"
              href="https://x.com/UbaidUllah31357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <SiX />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
