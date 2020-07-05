import React from "react";
import Comment from './Comment';

const Portrait = () => {
  return (
    <div style={{ width: "32px", height: "32px" }}>
        <img
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"
          alt="user"
          style={{ cursor: "pointer", width: "100%", height: "100%", borderRadius: "30px" }}
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
      <Portrait />
      <div style={{ marginLeft: "14px", fontWeight: "600" }}>
        {props.postedBy}
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
  const {photo, comments, createdAt, likes, body, postedBy} = props.post;
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
      <Header postedBy={postedBy} />
      <Pic photo={[photo]} />
      <Comment
        comments={comments}
        createdAt={createdAt}
        likes={likes}
        body={body}
        postedBy={postedBy}
      />
    </div>
  );
};

export default Post;
