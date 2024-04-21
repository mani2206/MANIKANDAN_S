import React from 'react'

function NavbarIcon() {
  return (
    <>
     <div className='bg-light p-1 position-sticky bottom-0 d-block d-sm-none ' style={{ boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}>
     <ul className=" navbaricon text-center d-flex justify-content-between p-0 m-0">
            <li className="active align-items-center liness" style={{padding: "1px"}}>
              <a href="/" className="text-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </a>
              <a className="nav-link  text-dark text"  style={{fontSize:"8px",padding: "5px"}} href="/">
                Home <span className="sr-only"></span>
              </a>
              <div className ="lines"></div>
            </li>
            <li className="align-items-center liness" style={{padding: "1px"}}>
              <a href="#about" className="text-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </a>
              <a className="nav-link  text text-dark"  style={{fontSize:"8px",padding: "5px"}} href="#about">
                About
              </a>
              <div className ="lines"></div>
            </li>
            <li className=" align-items-center liness" style={{padding: "1px"}}>
              <a href="#resume" className=" text-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </a>
              <a className="nav-link text-dark text"  style={{fontSize:"8px",padding: "5px"}}href="#resume">
                Resume
              </a>
              <div className ="lines"></div>
            </li>
            <li className="align-items-center liness" style={{padding: "1px"}}>
              <a href="#project" className="text-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark-ppt"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5zM8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                </svg>
              </a>
              <a className="nav-link  text-dark text" style={{fontSize:"8px",padding: "5px"}} href="#project">
                Projects
              </a>
              <div className ="lines"></div>
            </li>
            <li className="align-items-center liness"  style={{padding: "1px"}}>
              <a href="#contact" className="text-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-rolodex"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                </svg>
              </a>
              <a className="nav-link text-dark text"  style={{fontSize:"8px",padding: "5px"}} href="#contact">
                Contact
              </a>
              <div className ="lines"></div>
            </li>
          </ul>
     </div>
    </>
  )
}

export default NavbarIcon