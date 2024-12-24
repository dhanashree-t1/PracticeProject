import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./ContactUsPage.css";
import bgImage from '../assets/meetings-bg.jpg'; 

const ContactUsPage = () => {
  return (
    <div
      className="contact-page"
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={7} md={12} className="mb-4">
            <Card className="p-4 shadow-sm white-box">
              <Card.Body>
                <h3 className="mb-4 text-center">LET'S GET IN TOUCH</h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="YOUR NAME...*"
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="YOUR EMAIL..."
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="SUBJECT...*"
                      className="form-control-custom"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="YOUR MESSAGE..."
                      className="form-control-custom"
                    />
                  </Form.Group>
                  <Button
                    variant="danger"
                    className="w-100 custom-button"
                  >
                    SEND MESSAGE NOW
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

         
          <Col lg={4} md={12}>
            <Card className="p-4 shadow-sm text-white red-box">
              <Card.Body>
                <Card.Text style={{ color: 'white' }}>
                  <strong>Phone Number:</strong> 8275871049
                </Card.Text>
                <Card.Text style={{ color: 'white' }}>
                  <strong>Email Address:</strong> info@meeting.edu
                </Card.Text>
                <Card.Text style={{ color: 'white' }}>
                  <strong>Street Address:</strong>
                  <br />
                  Rio de Janeiro - RJ, 22795-008, India
                </Card.Text>
                <Card.Text style={{ color: 'white' }}>
                  <strong>Website URL:</strong> www.meeting.edu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <p className="text-center footer-text">
              COPYRIGHT © 2022 EDU MEETING CO., LTD. ALL RIGHTS RESERVED.
              <br />
              DESIGN: TEMPLATEMO
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;
