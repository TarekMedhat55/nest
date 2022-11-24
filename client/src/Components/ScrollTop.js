import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
const ScrollTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const showScrollToTop = () => {
    if (window.scrollY > 600) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showScrollToTop);
    return () => {
      window.removeEventListener("scroll", showScrollToTop);
    };
  }, []);
  return (
    <div
      className={scrollToTop ? "scroll-top active" : "scroll-top"}
      onClick={() => window.scrollTo(0, 0)}
    >
      <span>
        <FiArrowUp />
      </span>
    </div>
  );
};

export default ScrollTop;
