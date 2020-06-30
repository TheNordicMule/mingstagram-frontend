import React from "react";
import logo from "../assets/logo.png";
import home from '../assets/001-home.svg'
import chat from '../assets/002-chat.svg'
import compass from '../assets/003-compass.svg'
import heart from '../assets/004-heart.svg'

export const InstagramIcon = () => {
    return (
        <img src={logo} alt="instagramIcon"></img>
    );
}

export const HomeIcon = () => {
    return (
        <img src={home} alt="home"></img>
    );
}

export const CompassIcon = () => {
    return (
        <img src={compass} alt="compass"></img>
    );
}

export const HeartIcon = () => {
    return (
        <img src={heart} alt="heart"></img>
    );
}

export const ChatIcon = () => {
    return (
        <img src={chat} alt="chat"></img>
    );
}
