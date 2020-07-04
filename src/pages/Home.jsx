import React from "react";
import Container from "react-bootstrap/Container";
import Post from "../components/Post";
import Suggestion from "../components/Suggestion";

const Home = () => {
  return (
    <Container fluid className="content">
      <div className="post-section">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="suggestion">
        <Suggestion />
      </div>
    </Container>
  );
};

export default Home;
