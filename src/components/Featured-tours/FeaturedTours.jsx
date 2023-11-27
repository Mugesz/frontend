import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

const FeaturedTours = () => {
  return (
    <>
      {tourData?.map((tour, index) => (
        <Col key={index} lg="3" className="mb-4">
          <TourCard tour={tour} />{" "}
        </Col>
      ))}
    </>
  );
};

export default FeaturedTours;
