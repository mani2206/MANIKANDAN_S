import React from "react";
import Projects from "./Data";
export default function Buttons({ menuItems,filterItem,setItem }) {
  return (
    <>
      <div className="d-md-flex justify-content-evenly py-2 ">
        {menuItems.map((val) => (
          <button className="btn-gray text-dark p-2 px-3 m-1 fw-bold rounded" style={{fontSize :"10px",border:"1px solid #e9204f "}} onClick={()=>filterItem(val)}  key={val}>
            {val}
          </button>
        ))}
        <button className="btn-gray text-dark p-2 px-2  fw-bold rounded"  style={{fontSize :"10px",border:"1px solid #e9204f "}} onClick={()=>setItem(Projects)}>
          ALL
        </button>
      </div>
    </>
  );
}
