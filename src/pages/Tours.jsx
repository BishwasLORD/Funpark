import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import SearchBar from '../shared/SearchBar'
import ParkCard from '../shared/ParkCard'
import Newsletter from '../shared/Newsletter'
import parkData from '../assets/data/park'
import { Container, Row, Col } from 'reactstrap'



const Tours = () => {


  const[pageCount, setPageCount] =useState(0)
  const [page, setPage] = useState(0)

  useEffect(() =>{

   const pages = Math.ceil(5/ 4) 
   setPageCount(pages)

  },[])
  return <>

  <CommonSection title={"All Tours"}/>
  <section>
    <Container>
      <Row>
        <SearchBar />
      </Row>
    </Container>
  </section>
  <section  className="pt-0"> 
    <Container>
      <Row>
        {
         parkData?.map(park=>(
          <Col  lg='3' className='mb-4' key={park.id}><ParkCard park={park} />
  
          </Col>
      ))
        }
        <Col lg='12'> 
        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
          {[...Array(pageCount).keys()].map(number=>(
            <span key={number} onClick={() => setPage(number)}
            className={page===number ? 'active__page' : ""}
            >
              {number +1 }
            </span>
          ))}
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  <Newsletter />
  </>
}

export default Tours