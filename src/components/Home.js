import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/homefondo.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(48, 57, 54, 0.7)",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          width: "60%",
        }}
      >
        <Row>
          <Col className="text-center">
            <Image
              src="/menulogo.png"
              alt="Menu"
              style={{ width: "80px", cursor: "pointer" }}
              onClick={() => navigate("/menu")}
            />
            <h4 style={{ color: "white", marginTop: "10px" }}>
              <FormattedMessage id="menu" defaultMessage="MENU" />
            </h4>
          </Col>
          <Col className="text-center">
            <Image
              src="/storelogo.png"
              alt="Stores"
              style={{ width: "80px", cursor: "pointer" }}
              onClick={() => navigate("/stores")}
            />
            <h4 style={{ color: "white", marginTop: "10px" }}>
              <FormattedMessage id="stores" defaultMessage="STORES" />
            </h4>
          </Col>
          <Col className="text-center">
            <Image
              src="/cartlogo.png"
              alt="Cart"
              style={{ width: "80px", cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            />
            <h4 style={{ color: "white", marginTop: "10px" }}>
              <FormattedMessage id="cart" defaultMessage="CART" />
            </h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
