import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Projects from "../baseComponents/Data";
import { useState ,useEffect } from "react";
import Buttons from "../baseComponents/Button";
function Respositories() {
  const [item, setItem] = useState(Projects);
   console.log(item.length-2,"item----");
  const [visible, setVisible] = useState(3);
  const [enable, setEnable] = useState(true);
  const [less, setLess] = useState(true);
  const menuItems = [...new Set(Projects.map((val) => val.category))];
  // console.log(menuItems,"menu--");
  const filterItem = (cat) => {
    // console.log("Filtering by category:", cat);
    const newItems = Projects.filter((val) => val.category === cat);
    // console.log("Filtered items:", newItems);
    setItem(newItems);
  };

  // const showMoreItems = () => {
  //   if (less) {
  //     {visible < item.length ?
  //     setVisible((preValue) => preValue + 3):
  //     setLess(false);}
  //   } else {
  //     {visible > item.length ?
  //     setVisible(3):
  //     setLess(true);}
  //   }
  // };
  // const showMoreItems = () => {
  //   console.log("line34");
  //   if (less) {
  //     console.log("line36");
  //     if (visible < item.length) {
  //       setVisible((prevVisible) => prevVisible + 3);
  //       console.log("line39");
  //     } else {
  //       console.log("line41");
  //       setLess(false);
  //     }
  //   }
  //   else {
  //     console.log("line46");
  //     if (visible > 3) {
  //       console.log("line48");
  //       setVisible((prevVisible) => prevVisible - 3);
  //     } else {
  //       console.log("line51");
  //       setLess(false);
  //     }
  //   }
  // };

  const showMoreItems = () => {
    if (less && visible < Projects.length) {
      setVisible((prevVisible) => prevVisible + 3);
      // console.log(visible, "visible---");
      if(visible == item.length-2){
        setLess(false)
      }
    } else {
      if (visible > 3) {
        setVisible((prevVisible) => prevVisible - 3);
        setLess(visible - 3 <= 3); // Update less based on the next visibility state
      } else {
        setLess(true);
      }
    }
  };

  

 
  
  return (
    <>
      <div>
        <button className="btn respostiry fw-bold btn-white rounded-1 mt-3 py-3 px-4">
          RESPOSITORIES
        </button>
        <img
          className="email"
          style={{ width: "11%" }}
          src={"../.././images/work_mode.gif"}
          alt="work_mode"
        />
      </div>
      <h5 className="text-white py-4 res-heading">
        "Here you will find some of the personal projects that I created"
      </h5>
      <Buttons
        menuItems={menuItems}
        filterItem={filterItem}
        setItem={setItem}
      />
      {enable == true && (
        <div className="Respositories">
          {item.slice(0, visible).map((project) => (
            // console.log("Project category:", project.category),
            <div
              key={project.id}
              className="res-card fadeInUp"
              style={{ animationDelay: "1s" }}
              data-aos-anchor-placement="bottom-bottom"
            >
              <h6 className="text-dark res-heading">{project.name}</h6>
              <p className="text-dark res-content">
                {project.description.split(" ").map((word, i) => {
                  // console.log(word,"card title--");
                  //   return word === "HTML" ||
                  //     word === "Bootstrap5" ||
                  //     word === "CSS" ||
                  //     word === "SCSS" ||
                  //     word === "Javascript" ||
                  //     word === "jquery" ||
                  //     word === "ReactJs" ? (
                  //     <span style={{ color: "red", lineHeight: "1rem" }} key={i}>
                  //       {word}{" "}
                  //     </span>
                  //   ) : (
                  //     <span key={i}>{word} </span>
                  //   );
                  // })}
                  const keywords = [
                    "HTML",
                    "Bootstrap5",
                    "CSS",
                    "SCSS",
                    "Javascript",
                    "jquery",
                    "ReactJs",
                  ];

                  return keywords.includes(word) ? (
                    <span style={{ color: "red", lineHeight: "1rem" }} key={i}>
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  );
                })}
              </p>
              <div className="d-flex justify-content-around align-items-center">
                <a
                  className="git-hover"
                  target="_blank"
                  href={project.githubLink}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
                <button className="btn rounded">
                  {project.demoLink ? (
                    <a
                      className="res-link"
                      target="_blank"
                      href={project.demoLink}
                    >
                      Demo Link
                    </a>
                  ) : (
                    <span>
                      <Link to="/error" className="res-link">
                        In Progress
                      </Link>
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <button className="btn respostiry  fw-bold btn-white rounded-1 mt-3 py-2 px-3" onClick={showMoreItems}>
      {visible < item.length ? (less ? "LOAD MORE" :"LOAD MORE") : "LOAD LESS"}
      </button> */}
      {/* {item.length > 3 && (
        <div>
          <button
            className="btn respostiry fw-bold btn-white rounded-1 mt-3 py-2 px-3"
            onClick={showMoreItems}
          >
            {less == false ? "LOAD LESS" :"LOAD MORE"}
          </button>

        </div>
      )} */}
      {Projects.length > 3 && (
        <div>
          <button
            className="btn respostiry fw-bold btn-white rounded-1 mt-3 py-2 px-3"
            onClick={showMoreItems}
          >
            {less ? "LOAD MORE" : "LOAD LESS"}
          </button>
        </div>
      )}
    </>
  );
}

export default Respositories;
