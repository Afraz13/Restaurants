import React from "react";
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreviw({review}){
    const [open, setOpen] = useState(false);
    return(
        <>
            <button   onClick={() => setOpen(!open)} className="btn btn-danger ">Click here View the Review</button>
           <Collapse in={open}>
            <div>
                {review.map((item)=>(<>
                <hr />
                <h6>{item.name} : {item.date}</h6>
                <p>{item.rating}</p>
                <p>{item.comments}</p>
                </>))
                  }
            </div>
            </Collapse>


        </>
    )
}
export default Restreviw