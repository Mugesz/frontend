import React from 'react';
import './footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from "../../assets/images/logo.png";


const quick__links = [
  {
    Path:'/home',
    display:'Home'
  },
  {
    Path:'/about',
    display:'About' 
  },
  {
    Path:'/tours',
    display:'Tours' 
  },
];

const quick__links2 = [
  {
    Path:'/galleryimage',
    display:'Gallery'
  },
  {
    Path:'/login',
    display:'Login' 
  },
  {
    Path:'/register',
    display:'Register' 
  },
]


 const Footer = () => {
 
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
        <Col lg="3">
           <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem omnis maxime quos culpa a tempore voluptatem? Optio doloribus quidem, officiis, dolores, hic nam illum blanditiis voluptas beatae minus asperiores?</p>

            <div className="social__links d-flex align-items-center gap-4">
              <span>
              <Link to='#'><i className="ri-youtube-line"></i></Link>
              <Link to='#'><i className="ri-github-fill"></i></Link>
              <Link to='#'><i className="ri-facebook-fill"></i></Link>
              <Link to='#'><i className="ri-instagram-fill"></i></Link>

              </span>
            </div>

           </div>
        </Col>

        <Col lg='3'>
          <h5 className="footer__links-title">Discovery</h5>

          <ListGroup className='footer__quick-links'>
             {
              quick__links.map((item,index) => (
                <ListGroupItem key={index} className="ps-0 border-0" >
                  <Link to={item.Path}>{item.display}</Link>
                </ListGroupItem>
              ))
             }
          </ListGroup>
          

        </Col>

        <Col>
                    <h5 className="footer__links-title">Quick links</h5>
        <ListGroup className='footer__quick-links'>
             {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0 " >
                  <Link to={item.Path}>{item.display}</Link>
                </ListGroupItem>
              ))
             }
          </ListGroup>

        </Col>


        <Col lg='3'>
        <h5 className="footer__links-title">Contact</h5>
        <ListGroup className='footer__quick-links'>
           
                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3" >

                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-2-fill"></i></span>Email:
                </h6>

                <p className='mb-0'>dev.mugesh@gmail.com</p>
         
          </ListGroupItem>



          <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3" >

         <h6 className='mb-0 d-flex align-items-center gap-2'>
          <span><i className="ri-mail-send-line"></i></span>Address:
          </h6>

         <p className='mb-0'>gandhi puram, coiambatore</p>

      </ListGroupItem>


          
      <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3" >

<h6 className='mb-0 d-flex align-items-center gap-2'>
 <span><i className="ri-phone-fill"></i></span>Phone:
 </h6>

<p className='mb-0'>9000900900</p>

</ListGroupItem>
              
          </ListGroup>
        </Col>
           
           <Col lg='12' className="text-center pt-5">
            <p className='copyrights'>Copyrights {year}, design and developed by Mugesh Kanna. All rights reserved.</p>
           </Col>
        </Row>
      </Container>
    </footer>
    )
}

export default Footer;