import React from "react";
import ProfileCard from "../ProfileCard";
import SidebarBox from "../SidebarBox";
import PopularPosts from "../PopularPosts";
import Advertise from "../Advertise";
import Tags from "../Tags";
import Inspiration from "../Inspiration";

function SideBar() {
  return (
    <div className='col col-right'>
      <ProfileCard />
      <SidebarBox title={"POPULAR POSTS"}>
        <PopularPosts />
      </SidebarBox>
      <SidebarBox title={"ADVERTISE"}>
        <Advertise />
      </SidebarBox>

      <SidebarBox title={"Tags"}>
        <Tags />
      </SidebarBox>

      <SidebarBox title={"Inspiration"} classNames={"inspiration"}>
        <Inspiration />
      </SidebarBox>
    </div>
  );
}

export default SideBar;
