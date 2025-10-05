import React from 'react';
import { useState, useEffect } from "react";
const BtnScroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="btnScrollArriba" onClick={scrollToTop}>
        <i className="bi bi-arrow-up fs-3"></i>
      </button>
    )
    );
};

export default BtnScroll;