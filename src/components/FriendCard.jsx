import React from "react";
import image from '../assets/DefaultUser.jpg'

const Portrait = () => {
  return (
    <div style={{ marginRight: "12px" }}>
      <img
        src={image}
        alt="friend-portrait"
        height="32px"
        style={{borderRadius:'16px', cursor:'pointer'}}
      />
    </div>
  );
};

const Name = () => {
  return (
    <div style={{ marginRight: "12px", alignContent:"center", fontWeight:"500", fontSize: "16px", minWidth:"150px", cursor: 'pointer' }}>
      tesla
    </div>
  );
};

const FollowButton = () => {
  return (
    <div
      style={{
        marginleft: "8px",
        alignContent: "center",
        fontWeight: "500",
        color: "#0095f6",
        cursor: "pointer",
      }}
    >
      Follow
    </div>
  );
};


const FriendCard = () => {
  return (
    <div style={{ padding: "8px 16px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Portrait />
        <Name />
        <FollowButton />
      </div>
    </div>
  );
};

export default FriendCard;
