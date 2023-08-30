import React from 'react'
import './newsletter.css'



import { Container, Row, Col } from 'reactstrap'
import maleCostumer from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
   <section className="newsletter">
     <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Join to get useful information about park</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Join</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque debitis, omnis, facere vitae tempore itaque repellendus quibusdam quod sunt quis autem? Eligendi ipsa voluptates molestiae sint eveniet, quibusdam labore.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleCostumer} alt="" />
                </div>
            </Col>
        </Row>
     </Container>
   </section>
  )
}

export default Newsletter