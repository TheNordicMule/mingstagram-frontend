import React from "react";
import { InstagramIcon } from "../components/icons";
import Card from "react-bootstrap/Card";
import LoginForm from "../components/LoginForm";
import Container from "react-bootstrap/Container";

const Login = () => {
  return (
    <>
      <Container fluid>
        <Card
          style={{
            width: "30rem",
            position: "center",
            margin: "10rem auto",
            height: "23rem",
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
                transform: "scale(1.9)",
                margin: "2rem auto",
              }}
            >
              <InstagramIcon />
            </Card.Title>
            <LoginForm />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
