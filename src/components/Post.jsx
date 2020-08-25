import React from "react";
import Comment from "./Comment";

const Portrait = (props) => {
  return (
    <div style={{ width: "32px", height: "32px" }}>
      <img
        src={props.photo}
        alt="user"
        style={{
          cursor: "pointer",
          width: "100%",
          height: "100%",
          borderRadius: "30px",
        }}
      />
    </div>
  );
};

const Header = (props) => {
  return (
    <div
      style={{
        alignItems: "center",
        flexDirection: "row",
        height: "60px",
        padding: "16px",
        borderBottom: "1px solid rgba(var(--ce3,239,239,239),1)",
        display: "flex",
      }}
      alt="first-post-row"
    >
      <Portrait photo={props.photo}/>
      <div style={{ marginLeft: "14px", fontWeight: "600" }}>
        {props.username}
      </div>
    </div>
  );
};

const Pic = (props) => {
  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        alt="pic"
        src={props.photo}
      ></img>
    </div>
  );
};

const Post = (props) => {
  const { photo, comments, createdAt, likes, body } = props.post;
  const { photo: postedByPhoto, username: postedByUsername} = props.post.postedBy;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: "3px",
        border: "1px solid rgba(var(--b6a,219,219,219),1)",
        marginBottom: "60px",
      }}
    >
      <Header photo={postedByPhoto} username={postedByUsername} />
      <Pic photo={[photo]} />
      <Comment
        comments={comments}
        createdAt={createdAt}
        likes={likes}
        body={body}
        username={postedByUsername}
      />
    </div>
  );
};

export default Post;
