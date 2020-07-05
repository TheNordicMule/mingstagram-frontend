import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Post from "../components/Post";
import Suggestion from "../components/Suggestion";
import getPosts from "../utils/getPosts";

const Home = () => {
  const [feed, setFeed] = useState(null);
  useEffect(() => {
    getPosts()
      .then((res) => {
        setFeed(res);
      })
      .catch((error) => console.log(error));
  }, [setFeed]);

  return (
    <Container fluid className="content">
      <div className="post-section">
        {feed ? feed.map((post) => <Post post={post} key={post._id} />) : null}
      </div>
      <div className="suggestion">
        <Suggestion />
      </div>
    </Container>
  );
};

export default Home;
