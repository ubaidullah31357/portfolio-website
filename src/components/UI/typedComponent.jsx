import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedComponent() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Web Developer",
        "Wordpress Designer",
        "Certified Ethical Hacker",
      ],
      typeSpeed: 60,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-component">
      <span ref={el} />
    </div>
  );
}
