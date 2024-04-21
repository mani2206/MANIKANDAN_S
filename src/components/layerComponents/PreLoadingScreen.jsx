import React from "react";

function PreLoadingScreen() {
  return (
    <div className="py-5 preloading-screen">
      <div className="loader-15"></div>
      <h5 className="p-2 pt-3">WELCOME</h5>
      <div
        className="align-items-center pre-loading"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
        }}
      >
        <p className="m-0 "  style={{
           fontSize:"11px"
        }}>from</p>
        <h6 style={{
           fontSize:"15px"
        }}>S.Mani</h6>
      </div>
    </div>
  );
}

export default PreLoadingScreen;
