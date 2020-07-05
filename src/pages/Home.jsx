import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import { FeedContext } from "../contexts/FeedContext";
import Post from "../components/Post";
import Suggestion from "../components/Suggestion";
import getPosts from "../utils/getPosts";

const Home = () => {
  const { feed, setFeed } = useContext(FeedContext);
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
        {feed
          ? feed.map((post) => (
              <Post
                key={post._id}
                post={post}
              />
            ))
          : null}
      </div>
      <div className="suggestion">
        <Suggestion />
      </div>
    </Container>
  );
};

export default Home;
