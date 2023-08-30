import React, {useState} from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'

const Booking = ({ park , avgRating }) => {
 
  const{price, reviews} = park ;
const navigate = useNavigate()


  const[Credentials , setCredentials] = useState ({
  userId:'01',
  userEmail:'example@gmail.com',
  fullName:'',
  phone:'',
  guestSize:1,
  bookAt:''

})



  const handleChange= e=> {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }


  const entryFee = 10
  const totalAmount = Number(price) * Number(Credentials.guestSize) + Number(entryFee)

  // send data to the server

const handleClick = e=> {
  e.preventDefault()

  navigate("/thank-you")
}

  return <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
      <h3>${price} <span>/per person</span></h3>
      <span className="tour__rating d-flex align-item-center ">
        <i className="ri-star-s-fill"></i>
        {avgRating === 0 ? null: avgRating }   ({reviews?.length})

      </span>
    </div>

{/* Booking Form */}


<div className="booking__form">
  <h5>Information</h5>
  <Form className="booking__info-form" onSubmit={handleClick}>
      <FormGroup>
        <input type="text" placeholder="Full Name" id="fullname" required onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
      </FormGroup>
      <FormGroup className="d-flex align-items-center gap-3">
        <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
        <input type="number" placeholder="Visitor" id="visiterSize" required onChange={handleChange} />
      </FormGroup>
      


  </Form>
</div>
{/* Booking end */}

{/* booking Bottom */}

<div className="booking__bottom">
  <ListGroup>
    <ListGroupItem className="border-0 px-0">
       <h5 className="d-flex align-item-center">
        ${price}<i className="ri-close-line">1 person</i>
       </h5>
       <span>${price}</span>
    </ListGroupItem>
    <ListGroupItem className="border-0 px-0">
       <h5>Entry Fee</h5>
       <span>${entryFee}</span>
    </ListGroupItem>
    <ListGroupItem className="border-0 px-0">
       <h5>Total</h5>
       <span>${totalAmount}</span>
    </ListGroupItem>
  </ListGroup>

  <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
</div>

  </div>
}

export default Booking