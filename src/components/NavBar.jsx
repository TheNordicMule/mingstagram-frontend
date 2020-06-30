import React from "react";
import {
  HeartIcon,
  ChatIcon,
  InstagramIcon,
  HomeIcon,
  CompassIcon,
} from "./icons";
import "../styles/App.css";

const NavBar = () => {
  return (
    <div className="NavBarWrapper">
      <div className="NavBar">
        <InstagramIcon />
        <div className="IconGroup">
          <ul>
            <li>
              <HomeIcon />
            </li>
            <li>
              <ChatIcon />
            </li>
            <li>
              <CompassIcon />
            </li>
            <li>
              <HeartIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
