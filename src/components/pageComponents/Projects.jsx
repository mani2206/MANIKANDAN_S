import React from "react";
import Respositories from "./Respositories";

const Projects = () => {
  const projectsStyle = {
    backgroundImage: 'url("/images/abstract.jpg")',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  const imagePaths = [
    "../.././images/Design_1.png",
    "../.././images/Design_2.png",
    "../.././images/Design_3.png",
    "../.././images/Design_4.png",
    "../.././images/Design_5.png",
    "../.././images/Design_6.png",
    "../.././images/Design_7.png",
    "../.././images/Design_8.png",
    "../.././images/Design_9.png",
  ];
  

  return (
    <>
      <div
        className="project w-100  text-center"
        id="project"
        style={projectsStyle}
      >
        <div className="py-2">
          <h4 className="text-white d-flex justify-content-center">
            LATEST
            <p className="m-0 px-1" style={{ color: "#e12c5b" }}>
              PROJECTS
            </p>
          </h4>
          <div className="line_contact"></div>
        </div>

        {/* <div className="slider  d-md-flex w-100 justify-content-center my-5">
          <div className="slide-track">
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_1.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_2.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_3.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_4.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_5.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_6.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_1.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_7.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_2.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_3.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_4.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_5.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_6.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_7.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_8.png"}
                alt="React Image"
              />
            </div>
          </div>
        </div> */}
        <div className="slider d-md-flex w-100 justify-content-center my-5">
          <div className="slide-track">
            {imagePaths.map((path, index) => (
              <div className="slide" key={index}>
                <img
                  className="w-100"
                  src={path}
                  alt={`React Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <Respositories />
      </div>
    </>
  );
};

export default Projects;
