import React, { useRef, useState } from "react";
import "../styles/tour-detail.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../../assets/data/tours";
import calculateavgRating from "../utils/avgRating";
import avatar from "../../assets/images/avatar.jpg";
import Booking from "../Booking/Booking";
import Newsletter from "../../shared/newsletter/NewsLetter";

const TourDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef();

  const [tourRating, setTourRating] = useState();

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const options = { day: "numeric", month: "long", year: "numeric" };

  const { totalRating, avgRating } = calculateavgRating(reviews);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`$(reviewText), ${tourRating}`);
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>{" "}
                      {calculateavgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span> ({reviews?.length}) </span>
                      )}
                    </span>

                    <span>
                      <i className="ri-map-pin-user-line"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-detail">
                    <span>
                      <i className="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>
                      {price}/perperson
                    </span>
                    <span>
                      <i className="ri-map-pin-range-line"></i>
                      {distance}K/m
                    </span>
                    <span>
                      <i className="ri-group-fill"></i>
                      {maxGroupSize}people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>This is the description</p>
                </div>

                {/* =================== tour review sec start ================= */}

                <div className="tour__reviews mt-5">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex aligin-item-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1<i className="ri-star-half-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(1)}>
                        2<i className="ri-star-half-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(1)}>
                        3<i className="ri-star-half-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(1)}>
                        4<i className="ri-star-half-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(1)}>
                        5<i className="ri-star-half-s-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text "
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="">
                              <h5>mujib</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-us",
                                  options
                                )}
                              </p>
                            </div>

                            <span className="d-flex align-items-center">
                              5 <i className="ri-star-half-s-fill"></i>
                            </span>
                          </div>

                          <h6>Amaging tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>

                {/* =================== tour review sec end ================= */}
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
