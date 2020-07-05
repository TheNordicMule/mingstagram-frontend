import React from "react";
import DefaultUser from "../assets/DefaultUser.jpg";
import FriendCard from "./FriendCard";

const Image = () => {
  return (
    <div style={{ width: "64px", height: "64px" }}>
      <img
        src={DefaultUser}
        alt="default-user"
        style={{ height: "100%", width: "100%", borderRadius: "32px", cursor: "pointer" }}
      />
    </div>
  );
};

const MyInfo = () => {
  return (
    <div
      style={{
        marginLeft: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <a
          style={{
            fontWeight: "600",
            color: "rgba(var(--i1d,38,38,38),1)",
            margin: "none",
            fontSize: "14px",
            lineHeight: "18px",
            marginBottom: "2px",
            padding: "2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          href="http://localhost:3000"
        >
          elonmusk
        </a>
      </div>
      <div>
        <p
          style={{
            fontSize: "12px",
            lineHeight: "14px",
            paddingLeft: "2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "inline-block",
            color: "rgba(var(--f52,142,142,142),1)",
          }}
        >
          Elon Musk
        </p>
      </div>
    </div>
  );
};

const Self = () => {
  return (
    <div
      style={{
        height: "auto",
        marginBottom: "10px",
        marginTop: "18px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "0",
          maxHeight: "141px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image />
        <MyInfo />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div style={{ padding: "4px 16px", alignItems: "center" }}>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "18px",
          margin: "-3px 0 -4px",
          fontWeight: "600",
          color: "rgba(var(--f52,142,142,142),1)",
        }}
      >
        Suggestion for you
      </div>
    </div>
  );
};

const Friends = () => {
  return (
    <div
      style={{
        margin: "0 0 12px -16px",
        width: "calc(100% + 32px)",
      }}
    >
      <Header />
      <FriendPanel />
    </div>
  );
};

const Suggestion = () => {
  return (
    <>
      <Self />
      <Friends />
    </>
  );
};

const FriendPanel = () => {
  return (
    <div style={{ padding: "4px 16px", alignItems: "center" }}>
      <div style={{ height: "auto", overflow: "hidden auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        >
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
