import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";

const SignUpForm = () => {
  const username = useInput("");
  const password = useInput("");
  const fullname = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    password.setValue("");
    username.setValue("");
    fullname.setValue("");
    email.setValue("");
  };

  return (
    <Form style={{ width: "85%", margin: "1rem auto" }} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter Email"
          value={email.value}
          onChange={email.onChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicFullName">
        <Form.Control
          type="text"
          placeholder="Enter Full Name"
          value={fullname.value}
          onChange={fullname.onChange}
        />
      </Form.Group>
      <Form.Group controlId="forBasicUserName">
        <Form.Control
          type="text"
          placeholder="Enter Username"
          value={username.value}
          onChange={username.onChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password.value}
          onChange={password.onChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        size="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
