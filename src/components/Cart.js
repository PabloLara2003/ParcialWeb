import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/menu.json?key=b1a7afc0")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching menu:", error));
  }, []);

  return (
    <Container fluid>
      <div
        style={{
          backgroundColor: "#0E5C60",
          padding: "20px 0",
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <FormattedMessage id="cart" />
      </div>

      {/* Carrusel de imágenes con altura reducida */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "250px",
          backgroundColor: "#F8F1ED",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: 10,
            color: "black",
          }}
        >
          {"<"}
        </span>
        <Image
          src="/menufondo.png"
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: 10,
            color: "black",
          }}
        >
          {">"}
        </span>
      </div>

      {/* Tarjetas de productos */}
      <Container className="py-4" style={{ backgroundColor: "#FFF8F3" }}>
        <Row className="justify-content-center">
          {products.map((product, index) => (
            <Col key={index} xs={6} md={3} className="d-flex justify-content-center">
              <Card
                className="text-center shadow"
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.foto}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body style={{ backgroundColor: "#0E5C60", color: "white", padding: "10px" }}>
                  <Card.Title style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {product.nombre.toUpperCase()}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Cart;
