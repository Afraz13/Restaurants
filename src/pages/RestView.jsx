import React from "react";
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Restreviw from "../components/Restreviw";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function RestView(){
    const [show, setShow] = useState(false);

    const {id} =useParams()
    console.log(id);

    const allrestaurent = useSelector((state)=>state.restSlice.allrestaurent)
    console.log(allrestaurent );
    const selectedRestaurent = allrestaurent.find(item=>item.id==id)
    console.log(selectedRestaurent);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(

       <>
       <Row className='mt-5 mb-5'>
        <Col md={1}></Col>
        <Col md={3} className='d-flex justify-content-end'>
        <img src={selectedRestaurent.photograph} alt=""  style={{height:'400px',width:'100%'}} className='ms-3'/>
        </Col>
        <Col md={7}>
            <h3 className="text-center"> RESTATURENT <span className="text-danger">DETAILS</span></h3>
            <hr />
            <ListGroup>
      <ListGroup.Item className="text-center p-4" style={{fontSize:"20px"}}> <h4>Emily</h4> </ListGroup.Item>
      <ListGroup.Item>Neighborhood :{selectedRestaurent.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type :{selectedRestaurent.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address :{selectedRestaurent.address}</ListGroup.Item>
      <ListGroup.Item className="p-5">
      <button className="btn btn-danger ms-5 me-5" onClick={handleShow}>Operting Hours</button>

      
      <Modal show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Operting Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday :{selectedRestaurent.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday :{selectedRestaurent.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday :{selectedRestaurent.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday :{selectedRestaurent.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday :{selectedRestaurent.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday :{selectedRestaurent.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday :{selectedRestaurent.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>
     <Restreviw review={selectedRestaurent.reviews}/>
      </ListGroup.Item>
    </ListGroup>
        </Col>
        <Col >
        
        </Col>
       </Row>
       
       </>
    )
}
export default RestView