import React from "react";
import { InstagramIcon } from "./icons";
import Card from "react-bootstrap/Card";
import SignUpForm from "./SignUpForm";
import Container from "react-bootstrap/Container";

const SignUp = (props) => {
  return (
    <>
      <Container fluid>
        <Card
          style={{
            maxWidth: "100%",
            width: "30rem",
            position: "center",
            margin: "10rem auto",
            height: "30rem",
            border: "1px solid rgba(var(--b6a, 219, 219, 219), 1)",
            backgroundColor: "rgba(var(--d87,255,255,255),1)",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                transform: "scale(1.7)",
                margin: "2rem auto",
              }}
            >
              <InstagramIcon />
            </Card.Title>
            <SignUpForm />
          </Card.Body>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              margin: "auto",
            }}
          >
            <p>Already have an account?</p>
            <span
              onClick={props.login}
              style={{ color: "#007BFF", cursor: "pointer" }}
            >
              Login
            </span>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
