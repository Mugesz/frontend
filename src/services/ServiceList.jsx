import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
    imgUrl: weatherImg,
    title:"Calculate Weather",
    desc:"The point of using Lorem Ipsum is that"
    },
    
    {
     imgUrl: guideImg,
     title:"Best tour guide",
     desc:"The point of using Lorem Ipsum is that"
    }, 
        
    {
     imgUrl: customizationImg,
     title:"Customization",
     desc:"The point of using Lorem Ipsum is that"
   }

]


const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
        <ServiceCard item={item} />
         </Col>
      ))}
    </>
  )
}

export default ServiceList;
