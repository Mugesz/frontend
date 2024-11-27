import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PaymentUI = () => {
  return (
    <section className="payment-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="8" sm="12">
            <div className="payment-card p-4 shadow rounded">
              <h2 className="text-center mb-4">Payment Gateway</h2>

              <Form>
                {/* Card Details Section */}
                <Form.Group className="mb-3" controlId="cardName">
                  <Form.Label>Cardholder Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter cardholder name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter card number"
                    maxLength="16"
                  />
                </Form.Group>

                <Row>
                  <Col md="6" className="mb-3">
                    <Form.Group controlId="expiryDate">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="month" />
                    </Form.Group>
                  </Col>
                  <Col md="6" className="mb-3">
                    <Form.Group controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="Enter CVV" maxLength="3" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* GPay Section */}
                <Form.Group className="mb-3">
                  <Form.Label>Google Pay (UPI ID)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your UPI ID"
                  />
                </Form.Group>

                {/* Amount Section */}
                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    min="1"
                    step="0.01"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Pay Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentUI;
