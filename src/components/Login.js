import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (password.length < 5 || password.length > 8) {
      setError("Password must be between 5 and 8 characters");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="h-100">
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ backgroundColor: "#FFF8F3" }}
        >
          <Image
            src="/logo.jpg"
            alt="Logo"
            style={{ width: "120px", marginBottom: "20px" }}
          />
          <h2 style={{ fontWeight: "bold", color: "#173F35" }}>TOO GOOD TO GO</h2>
          <p style={{ color: "#914E38", fontWeight: "600" }}>FOOD WASTING SOLUTION</p>
          <Image
            src="/food-image.jpg"
            alt="Food Image"
            style={{
              width: "80%",
              borderRadius: "20px",
              marginTop: "10px",
            }}
          />
        </Col>

        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#173F35", color: "white", padding: "0 50px" }}
        >
          <Form style={{ width: "80%" }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid white",
                  color: "white",
                  borderRadius: "30px",
                  padding: "10px 15px",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid white",
                  color: "white",
                  borderRadius: "30px",
                  padding: "10px 15px",
                }}
              />
              {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
            </Form.Group>

            <p
              className="text-center"
              style={{
                fontSize: "0.9rem",
                color: "white",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              Forgot Password?
            </p>

            <Button
              type="submit"
              variant="light"
              className="w-100"
              style={{
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                padding: "10px",
              }}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
