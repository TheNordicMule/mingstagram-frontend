import React from "react";

const Portrait = () => {
  return (
    <div style={{ width: "32px", height: "32px" }}>
      {/* <div
        style={{
          position: "absolute",
          top: "-5px",
          left: "-5px",
          width: "42px",
          height: "42px",
          display: 'flex',
          alignContent: "center"
        }}
      > */}
        <img
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"
          alt="user"
          style={{ cursor: "pointer", width: "100%", height: "100%", borderRadius: "30px" }}
        />
      </div>
    // </div>
  );
};

const Header = () => {
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
      <div style={{ marginLeft: "14px", fontWeight: "600" }}>Elon Musk</div>
    </div>
  );
};

const Pic = () => {
  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        alt="pic"
        src="https://wallpapercave.com/wp/wp2038961.jpg"
      ></img>
    </div>
  );
};

const Comment = () => {
  return <div>comment section</div>;
};

const Post = () => {
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
      <Header />
      <Pic />
      <Comment />
    </div>
  );
};

export default Post;
