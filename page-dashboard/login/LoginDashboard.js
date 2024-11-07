import React from "react";
import Container from "react-bootstrap/Container";
import "./LoginDashboard.css";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
//import { BsInfo } from "react-icons/bs";

function LoginDashboard() {
  const onLogin = () => {
    localStorage.setItem("isLogin", "1");
    window.location.href = "/dashboard";
  };
  return (
    <div>
      <body style={{ backgroundColor: "gray", height: 750 }}>
        <div style={{ paddingTop: 40 }}>
          <Container>
            <Row>
              <Col md={{ span: 4, offset: 3 }}>
                <Col md={{ span: 4, offset: 3 }}></Col>
                <Card className="login">
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <h3 style={{ color: "red" }}>Login</h3>
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>UserName or Email</Form.Label>
                        <Form.Control type="email" placeholder="UserName" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <div style={{ paddingTop: 20, width: 100 }}>
                        <Button
                          variant="primary"
                          style={{ width: 150 }}
                          onClick={onLogin}
                        >
                          Submit
                        </Button>{" "}
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={{ span: 4, offset: 3 }}></Col>
            </Row>
          </Container>
        </div>
      </body>
    </div>
  );
}

export default LoginDashboard;
