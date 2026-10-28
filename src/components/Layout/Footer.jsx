import footerData from '../../api/footerApi.json';
import { IoCallSharp } from 'react-icons/io5';
import { MdPlace } from 'react-icons/md';
import { TbMailPlus } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <>
      <div className="h-16"></div>
      <footer className="relative w-full px-4 py-6 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
          {footerData.map((CurrentItem, index) => {
            return (
              <article
                className="flex w-full max-w-xs items-center justify-start gap-4"
                key={index}
              >
                <div className="text-2xl text-[#00ff8b]">
                  {footerIcons[CurrentItem.icon]}
                </div>
                <div>
                  <p className="text-base text-[#fffbfc]">
                    {CurrentItem.title}
                  </p>
                  <p className="text-[0.8rem] text-[#c3bbbe]">
                    {CurrentItem.details}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </footer>
    </>
  );
};
