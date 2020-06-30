import React from "react";
import {HeartIcon, ChatIcon, InstagramIcon, HomeIcon, CompassIcon} from "./icons";


const NavBar = () => {
  return (
    <div className="NavBar">
      <InstagramIcon />
      <HomeIcon />
      <ChatIcon />
      <CompassIcon />
      <HeartIcon />
    </div>
  );
};

export default NavBar;
