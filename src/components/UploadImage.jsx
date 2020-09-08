import React, { useState, useContext, useEffect } from "react";
import { ChatIcon } from "./Icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";
import getPosts from "../utils/getPosts";
import { FeedContext } from "../contexts/FeedContext";

const UploadImage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setFeed } = useContext(FeedContext);
  const [loading, setLoading] = useState(false);

  const UploadModal = () => {
    const link = useInput("");
    const description = useInput("");

    async function handleSubmit() {
      const photoValue = link.value;
      const bodyValue = description.value;
      const token = localStorage.getItem("token");
      const url = `${process.env.REACT_APP_BACKEND_API}/post/`;
      try {
        const result = await fetch(url, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            photo: photoValue,
            body: bodyValue,
          }),
        });
        await result.json();
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
      handleClose();
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
    }, []);

    return (
      <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Your Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicLink">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="link"
                  placeholder="Enter Your Link"
                  value={link.value}
                  onChange={link.onChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicBody">
                <Form.Label>Your Post Body</Form.Label>
                <Form.Control
                  type="text"
                  name="body"
                  placeholder="Enter Your Your Post Body"
                  value={description.value}
                  onChange={description.onChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  return (
    <>
      <ChatIcon onClick={handleShow} />
      <UploadModal />
    </>
  );
};

export default UploadImage;
