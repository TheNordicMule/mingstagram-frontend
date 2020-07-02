import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";

const LoginForm = () => {
  const username = useInput("");
  const password = useInput("");

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
    console.log(await result.json());
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
