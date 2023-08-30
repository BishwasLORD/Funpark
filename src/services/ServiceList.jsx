import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
  {
    imgUrl:weatherImg,
    title:"Calculate weather",
    desc: "lorem ipsum dolor sit amet, consectetur adip."
  },
  {
    imgUrl:guideImg,
    title:"Best Guide ",
    desc: "lorem ipsum dolor sit amet, consectetur adip."
  },
  {
    imgUrl:customizationImg,
    title:"Customization",
    desc: "lorem ipsum dolor sit amet, consectetur adip."
  },
]


const ServiceList = () => {
  return( 
    <>
    {servicesData.map((item, index) => ( 
    <Col lg="3" key={index} >
       <ServiceCard item={item}/>
       </Col>))
    }


    </>
  )
}

export default ServiceList