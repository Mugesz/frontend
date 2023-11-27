



import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../../shared/CommonSection';
import SearchBar from '../../shared/SearchBar';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import Newsletter from '../../shared/newsletter/NewsLetter'


import '../styles/tour.css';


const Tours = () => {

    const [pageCount, setPageCount] = useState(0);
    const [page, Setpage] = useState(0);

    useEffect(()=> {
        const pages = Math.ceil(5/4)
           setPageCount(pages)  
    }, [page])

  return (
    <>
      <CommonSection title={"All tours"}/>
      <section>
        <Container>
            <Row>
                <SearchBar /> 
            </Row>
        </Container>
      </section>
 
      <section>
        <Container>
            <Row>
                {
              tourData?.map(tour => (
                <Col lg='3'className='mb-4' key={tour.id}>
                <TourCard tour={tour} />
                </Col>
              ))}

           
            </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default Tours;
