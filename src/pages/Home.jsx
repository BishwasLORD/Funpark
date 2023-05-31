import React from 'react'
import '../styles/home.css'
import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/pexels3.jpg'
import heroImg02 from '../assets/images/pexels5.jpg'
import heroVideo from '../assets/images/hero.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
const Home = () => {
  return <>

  {/* ============hero section start */}
  <section>

    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center  ">
              <Subtitle subtitle={'Know Before You Visit'} />
               <img src={worldImg} alt="" />
            </div>
            <h1>Refreshment open the door of creating
              <span className="highlight"> memories</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, omnis ut facere tempora sequi praesentium est eos asperiores quis tenetur ex iure, veniam hic earum odio veritatis. Laudantium, id impedit.lorem</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
  </section>
  


{/* ============hero section start */}

<section>
  <Container>
    <Row>
      <Col lg='3'>
        <h5 className="services__subtitle">What we provide</h5>
        <h2 className="service__title">We provide  best experience</h2>
      </Col>
    </Row>
  </Container>
</section>
  </>
  
}

export default Home