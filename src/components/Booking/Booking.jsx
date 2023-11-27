import React, { useState } from "react";
import "./booking.css";
import calculateavgRating from "../utils/avgRating";
import { useNavigate } from "react-router-dom";

import { Form, FormGroup, ListGroup, ListGroupItem, button } from "reactstrap";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01", //later
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  //send data to the server
  const handleClick = (e) => {
    e.preventDefault();

    navigate("/thank-you");
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex aligin_items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i
            className="ri-star-fill"
            style={{ color: "var(--secondary-color)" }}
          ></i>{" "}
          {calculateavgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>

      {/* ======================== booking from ============= */}

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full__name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="how many persons"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* ======================== booking end ============= */}

      <div className="booking__bottom">
        <ListGroup className="border-0 px-0">
          <h5 className="d-flex align-items-center gap-1">
            ${price} <i className="ri-close-line"></i>1 person
          </h5>
          <span>${price}</span>
        </ListGroup>

        <ListGroup className="border-0 px-0">
          <h5>service charge</h5>
          <span>${serviceFee}</span>
        </ListGroup>

        <ListGroup className="border-0 px-0 total">
          <h5>Total</h5>
          <span>${totalAmount}</span>
        </ListGroup>

        <button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Booking;
