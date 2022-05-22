import React, { Fragment } from "react";
import "./SidebarBox.scss";

export default function SidebarBox({children,title,classNames}){
    return(
        <div className={`sidebar sidebar-2 ${classNames ? classNames:""}`}>

        <div className="popular-posts">
         <h3>{title}</h3>
         <div className="sidebarContent">
         <Fragment>
            {children}
          </Fragment>
         </div>
         
        </div>
      </div>

    );
}