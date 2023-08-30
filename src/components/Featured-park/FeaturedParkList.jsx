import React from 'react'
import ParkCard from '../../shared/ParkCard'

import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'



const FeaturedParkList = () => {

  const {data: featuredParks} = useFetch(`${BASE_URL}/tours/search/getFeaturedParks`)

  console.log(featuredParks);

  return (<>
    {
    featuredParks?.map(park=>(
        <Col  lg='3' className='mb-4' key={park.id}><ParkCard park={park} />

        </Col>
    ))
        
    }
    </>
  )
}

export default FeaturedParkList