import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUpForm = () => {
  return (
    <Form style={{ width: "85%", margin: "1rem auto"}}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter Email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicFullName">
        <Form.Control
          type="text"
          placeholder="Enter Full Name"
        />
      </Form.Group>
      <Form.Group controlId="forBasicUserName">
        <Form.Control
          type="text"
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Enter Password"
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
