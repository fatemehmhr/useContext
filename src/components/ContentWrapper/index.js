import React from "react";
// import PostItems from "../PostItems";
import SideBar from "../SideBar";

function ContentWrapper({ children }) {
  return (
    <div className='container'>
      <div className='content'>
        {children}
        <SideBar />
      </div>
    </div>
  );
}

export default ContentWrapper;
