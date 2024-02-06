import React, { useEffect } from "react";

import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { fetchRestuarent } from "../redux/restSlice";
import RestCard from "../components/RestCard";

function Home(){
    // accesing state inorder to display content
    const allrestaurent = useSelector((state)=>state.restSlice.allrestaurent)
    console.log(allrestaurent);

    const dispatch = useDispatch()

    useEffect(()=>{
        // called thunk function
        dispatch(fetchRestuarent())
    },[])
    return(
        <Row>
            {allrestaurent?.length>0?
            allrestaurent?.map((restaurant)=>(
                <Col sm={6} md={4}>
            
            <RestCard restaurant = {restaurant}/>
            </Col>))
            : <p className="text-danger fs-4">Nothing to dislay</p>
            }
           
        </Row>
    )
}
export default Home