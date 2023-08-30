import React from 'react'
import {Card, CardBody} from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import './park-card.css'

const ParkCard = ({park}) => {

    const {id, title, city, photo, price, featured, reviews  } = park;

    const {totalRating, avgRating} = calculateAvgRating(reviews)
   

  return (
    <div className="park__card">
        <Card>
            <div className="park__img">
                <img src={photo} alt="park-img" />
            {featured &&  <span>
                    Featured
                </span>}
               
            </div>
             <CardBody>
                <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="park-location d-flex align-items-center gap-1">
                    <i className="ri-map-pin-line"></i> {city}
                   </span>
                   <span className="park-rating d-flex align-items-center gap-1">
           <i className="ri-star-fill"></i> {avgRating === 0 ? null :avgRating}
           {totalRating === 0 ? 'Not Rated' : <span>({reviews.length})</span> }
               
                   </span>
                </div>

                <h5 className="park__title"><Link to ={`/tours/${id}`}>{title}</Link>
                </h5>
                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h5>${price} <span>/per person</span></h5>
                    <button className="btn booking__btn">
                        <Link to={`/tours/${id}`}>Book Now</Link>
                    </button>

                </div>
             </CardBody>
             </Card>


            </div>
  )
}

export default ParkCard