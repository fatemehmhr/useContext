import React from "react";
import "./ProfileCard.scss"
import Avatar from "../../assets/images/avatar_girl2.jpg";
import {profile} from '../../posts';

export default function ProfileCard(){
    return(
        <div className="sidebar sidebar-1">
        <img src={Avatar} alt=""/>
        <div className="sidebar-text">
          <h3>{profile.firstName} {profile.lastName}</h3>
          <p>
           {profile.body}
            </p>
        </div>
      </div> 
    )
}