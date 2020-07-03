import React from "react";
import { CommentIcon, HeartIcon, ChatIcon } from "./Icons";

const ActionGroup = () => {
  return (
    <div
      className="action-group"
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-around",
        height: "40px",
        padding: "1rem 1rem 0.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "30px",
          boxSizing: "border-box",
        }}
      >
        <HeartIcon style={{ marginRight: "2rem", cursor: "pointer" }} />
        <CommentIcon style={{ marginRight: "2rem", cursor: "pointer" }} />
        <ChatIcon style={{ marginRight: "2rem", cursor: "pointer" }} />
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div>
      <ActionGroup />
    </div>
  );
};

export default Comment;
