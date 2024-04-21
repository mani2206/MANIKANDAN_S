import React, { useState, useEffect, useRef } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 12,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      className="fw-bold top "
      style={{ display: showButton ? "block" : "none"  }}
      onClick={scrollToTop}
     
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
