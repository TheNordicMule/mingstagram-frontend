import React from "react";
import Container from "react-bootstrap/Container";
import Post from '../components/Post';

const Home = () => {
  return (
    <Container fluid className="content">
      <div className="post-section">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="suggestion">Suggestions</div>
    </Container>
  );
};

export default Home;
