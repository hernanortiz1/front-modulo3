import React, { useState, useEffect } from "react";

const BtnScroll = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;

      setScrollPercent(percent);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btnScrollArriba ${visible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <svg className="scrollCirculo" viewBox="0 0 100 100">
        {/* Círculo incio*/}
        <circle className="circuloInicio" cx="50" cy="50" r="45" />

        {/* Círculo activo*/}
        <circle
          className="circuloActivo"
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDasharray: 2 * Math.PI * 45,
            strokeDashoffset:
              2 * Math.PI * 45 - (2 * Math.PI * 45 * scrollPercent) / 100,
          }}
        />

        {/* Flecha*/}
        <foreignObject x="30" y="30" width="40" height="40">
          <i className="bi bi-arrow-up iconoFlecha"></i>
        </foreignObject>
      </svg>
    </button>
  );
};

export default BtnScroll;
