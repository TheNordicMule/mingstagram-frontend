import React, { useState, useEffect, useContext } from "react";
import { CommentIcon, HeartIcon, ChatIcon, FilledHeartIcon } from "./Icons";
import timesince from "../utils/timesince";
import getPosts from "../utils/getPosts";
import { FeedContext } from "../contexts/FeedContext";

const ActionGroup = (props) => {
  const { setFeed } = useContext(FeedContext);
  const id = props.id;
  const [loading, setLoading] = useState(false);
  const { isLikedByMe } = props;

  async function toggleLike() {
    const url = `${process.env.REACT_APP_BACKEND_API}/post/${id}/like`;
    const token = localStorage.getItem("token");
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await result.json();
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (loading === true) {
      getPosts()
        .then((res) => {
          setFeed(res);
        })
        .catch((error) => console.log(error));
      setLoading(false);
    }
  }, [loading, setLoading, setFeed]);

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
        {isLikedByMe && (
          <FilledHeartIcon
            style={{ marginRight: "1rem", cursor: "pointer" }}
            onClick={toggleLike}
          />
        )}
        {!isLikedByMe && (
          <HeartIcon
            style={{ marginRight: "1rem", cursor: "pointer" }}
            onClick={toggleLike}
          />
        )}
        <CommentIcon style={{ marginRight: "2rem", cursor: "pointer" }} />
        <ChatIcon style={{ marginRight: "2rem", cursor: "pointer" }} />
      </div>
    </div>
  );
};

const IndividualComment = (props) => {
  return (
    <span>
      <span style={{ fontWeight: "500", marginRight: "0.2rem" }}>
        {props.username}
      </span>
      {props.body}
    </span>
  );
};

const CommentStatus = (props) => {
  const time = timesince(props.createdAt);
  const comments = props.comments;
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
          display: "flex",
          flexDirection: "column",
          margin: "0.4em 0",
        }}
      >
        <IndividualComment username={props.username} body={props.body} />
        {comments.map((element) => (
          <IndividualComment
            username={element.user.username}
            body={element.text}
            key={element._id}
          />
        ))}
        {/* {comments.length > 0 && (
          <IndividualComment
            username={comments[0].user.username}
            body={comments[0].text}
          />
        )} */}
      </div>
      <div style={{ color: "rgb(178, 178, 178)" }}>{time}</div>
    </div>
  );
};

const AddComment = (props) => {
  const { setFeed } = useContext(FeedContext);
  const id = props.id;
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    if (e.keyCode !== 13 || e.shiftKey === true) {
      return;
    }
    const url = `${process.env.REACT_APP_BACKEND_API}/post/${id}/comment`;
    const token = localStorage.getItem("token");
    const data = { text: newComment };
    try {
      const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await result.json();
      setNewComment("");
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (loading === true) {
      getPosts()
        .then((res) => {
          setFeed(res);
        })
        .catch((error) => console.log(error));
      setLoading(false);
    }
  }, [loading, setLoading, setFeed]);

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
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onKeyDown={handleSubmit}
      ></textarea>
    </div>
  );
};

const Comment = (props) => {
  const { comments, createdAt, likes, body, username, id, isLikedByMe } = props;
  return (
    <div>
      <ActionGroup id={id} isLikedByMe={isLikedByMe} />
      <CommentStatus
        comments={comments}
        createdAt={createdAt}
        likes={likes}
        body={body}
        username={username}
      />
      <AddComment id={id} />
    </div>
  );
};

export default Comment;
