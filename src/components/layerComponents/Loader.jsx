import React from "react";
import Loading_Page from "./Loading_Page";
import LoaderPage from "./LoaderPage";
import MobileLoader from "./MobileLoader";
import { useState, useEffect } from "react";

export default function Loader() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowDimensions.width < 992 ? (
        <MobileLoader />
      ) : windowDimensions.width >= 992 && windowDimensions.width < 1200 ? (
        <>
          <Loading_Page />
          <LoaderPage />
        </>
      ) : null}
    </>
  );
}



// const prevvisibles = ((prevVisible) =>{
//   const result =  prevVisible + 3
//   console.log(result,"result");
//   return prevVisible + 3
//  });
//    setVisible(prevvisibles) ;