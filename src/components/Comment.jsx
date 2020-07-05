import React from "react";
import { CommentIcon, HeartIcon, ChatIcon } from "./Icons";
import timesince from "../utils/timesince";

const ActionGroup = () => {
  return (
    <div
      className="action-group"
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-around",
        height: "40px",
        padding: "1rem 1rem 0.2rem",
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

const CommentStatus = (props) => {
  const time = timesince(props.createdAt);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0.3rem 1rem 1rem",
      }}
    >
      <div style={{ fontWeight: "500" }}>{props.likes.length} likes</div>
      <div
        style={{
          display: "block",
          margin: "0.4em 0",
        }}
      >
        <span style={{ fontWeight: "500" }}>{props.username}</span> {props.body}
      </div>
      <div style={{ color: "rgb(178, 178, 178)" }}>{time}</div>
    </div>
  );
};

const AddComment = () => {
  return (
    <div>
      <textarea
        placeholder="Add a comment"
        style={{
          height: "100%",
          width: "100%",
          borderTop: "1px solid rgb(219, 219, 219)",
          borderBottom: "none",
          borderRight: "none",
          padding: "1rem 0px 0px 1rem",
          resize: "none",
          borderLeftStyle: "none",
        }}
      ></textarea>
    </div>
  );
};

const Comment = (props) => {
  const { comments, createdAt, likes, body, username } = props;
  return (
    <div>
      <ActionGroup />
      <CommentStatus
        comments={comments}
        createdAt={createdAt}
        likes={likes}
        body={body}
        username={username}
      />
      <AddComment />
    </div>
  );
};

export default Comment;
