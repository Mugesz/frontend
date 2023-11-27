import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import worldImg from "../../assets/images/world.png";
import Subtitle from "../../shared/subtitle";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import herovideo from "../../assets/images/hero-video.mp4";
import experienceImg from "../../assets/images/experience.png";

import SearchBar from "../../shared/SearchBar";
import ServiceList from "../../services/ServiceList";
import FeaturedTours from "../Featured-tours/FeaturedTours";
import MansonryImagesGallery from "../image-gallery/MansonryImagesGallery";
import Testiomonal from "../Testiomonial/Testiomonal";
import NewsLetter from "../../shared/newsletter/NewsLetter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know before you go"} />

                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creting{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={herovideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* hero section start */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ==============feature tour start========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explored"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTours />
          </Row>
        </Container>
      </section>

      {/* ==============feature tour end ========== */}

      {/* ==============expirence section start ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"experience"} />
                <h2>
                  With our all experience <br />
                  We will serve you
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printin <br />
                  nce the 1500s, when an{" "}
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>

                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Sucessful Trip</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==============expirence section  end ========== */}

      {/* ==============galery section  start ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"gallery"} />
              <h2 className="gallery__tittle">
                Visit our customer tour gallery
              </h2>
            </Col>
            <Col lg="22">
              <MansonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==============galerye section  end ========== */}

      {/* ==============testominal section  start ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testiomonal />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==============testominal section  end ========== */}
      <NewsLetter />
    </>
  );
};

export default Home;
