import React from "react";
import {
  HeartIcon,
  InstagramIcon,
  HomeIcon,
  CompassIcon,
  DefaultAvatar,
} from "./Icons";
import UploadImage from "./UploadImage";
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
              <UploadImage />
            </li>
            <li>
              <CompassIcon />
            </li>
            <li>
              <HeartIcon />
            </li>
            <li>
              <DefaultAvatar />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
