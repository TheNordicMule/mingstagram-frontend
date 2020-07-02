import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";
import Toast from "react-bootstrap/Toast";

const LoginForm = () => {
  const username = useInput("");
  const password = useInput("");
  const { setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_API}/auth/login`;
    const result = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    const body = await result.json();
    if (body.success) {
      localStorage.setItem("token", body.token);
      console.log(body);
      setMessage("Login in successfully!");
      setShow(true);
    } else {
      setMessage(body.message);
    }
    setShow(true);
    password.setValue("");
    username.setValue("");
  };

  const MyToast = () => {
    return (
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          bottom: -100,
          left: 50,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" style={{placement: "flex"}}/>
          <strong className="mr-auto">Update Message</strong>
          <small>Just Now</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username.value}
            onChange={username.onChange}
            style={{ width: "85%", margin: "1rem auto" }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
            style={{ width: "85%", margin: "1rem auto" }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          size="lg"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "85%",
            margin: "1rem auto",
          }}
        >
          Submit
        </Button>
      </Form>
      <MyToast />
    </>
  );
};

export default LoginForm;
