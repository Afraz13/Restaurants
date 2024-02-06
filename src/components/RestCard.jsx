import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

function RestCard({restaurant}){
    return(
        <Link to={`/restaurent_view/${restaurant.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%' }} className=' ms-3 mt-5 mb-5'>
        <Card.Img variant="top" src={restaurant.photograph} />
        <Card.Body>
          <Card.Title className="text-center text-danger p-2">{restaurant.name}</Card.Title>
          <hr />
          <Row className='p-3'>
            <Col className="ms-3">
            <Card.Text>
           {restaurant.neighborhood}
          </Card.Text>
            </Col>

            <Col>
            <Card.Text>
           {restaurant.cuisine_type}
          </Card.Text>
            </Col>
          </Row>
          
         
        </Card.Body>
      </Card>
      </Link>
    )
}
export default RestCard