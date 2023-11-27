import React from 'react';
import './newsletter.css';
import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../../assets/images/male-tourist.png';

const NewsLetter = () => {
  return (
    <div>
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your mail' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odit quasi possimus repudiandae iste in, hic voluptate dolorum expedita eligendi quo fugit velit. Eius iste, nihil ut architecto ipsa aliquid.</p>
                    </div>
                </Col>

                <Col lg="6"><div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div></Col>
            </Row>
        </Container>
    </section>
      
    </div>
  )
}

export default NewsLetter
