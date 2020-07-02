import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";

const LoginForm = () => {
  const username = useInput("");
  const password = useInput("");
  const { setUser } = useContext(UserContext);

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
    } else {
      console.log(body.message);
    }
    password.setValue("");
    username.setValue("");
  };

  return (
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
  );
};

export default LoginForm;
