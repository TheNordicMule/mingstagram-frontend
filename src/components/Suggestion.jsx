import React from "react";
import DefaultUser from "../assets/DefaultUser.jpg";

const Image = () => {
  return (
    <div style={{ width: "64px", height: "64px" }}>
      <img
        src={DefaultUser}
        alt="default-user"
        style={{ height: "100%", width: "100%", borderRadius: "32px" }}
      />
    </div>
  );
};

const MyInfo = () => {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop:"10px",
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
            padding: "none",
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
            paddingLeft: '2px',
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: 'inline-block',
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

const Friends = () => {
  return <div>friends</div>;
};

const Suggestion = () => {
  return (
    <>
      <Self />
      <Friends />
    </>
  );
};

export default Suggestion;
