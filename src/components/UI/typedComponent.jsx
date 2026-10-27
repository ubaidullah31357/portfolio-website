import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function TypedComponent() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'FullStack Web Developer',
        'Mobile App Developer',
        'Wordpress Designer',
        'Certified Ethical Hacker',
      ],
      typeSpeed: 60,
      loop: true,
      loopCount: Infinity,
      cursorClass: 'typed-cursor',
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-font-audiowide">
      <span
        ref={el}
        className="break-words font-['Audiowide'] text-[clamp(1rem,5vw,2rem)] font-normal text-[#808080]"
      />
    </div>
  );
}
