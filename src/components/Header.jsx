// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function Header() {
//   return (
//     <Navbar className="bg-dark ">
//     <Container>
//         <p ><i class="fa-solid fa-bowl-food text-info fa-3x me-2" ></i></p>
     
//       <Navbar.Brand href="#home" className='text-primary' style={{fontSize:'40px'}}><span className='text-danger'>Food</span> Circle</Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse className="justify-content-end">
       
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

// export default Header



import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { search } from '../redux/restSlice';
import { useDispatch } from 'react-redux';
import Food from '../food-removebg-preview.png'

function Header() {
  const dispatch = useDispatch()
  return (
    <div>
         <Navbar className="bg-dark"> 
      <Container>
        <img height={'100px'} width={'120px'} src={Food} alt="no image" className='me-3'/>
        <Navbar.Brand href="#home" style={{fontSize:'40px'}}><span className='text-danger'>Food</span> <span className='text-success'>Circle</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
        <div className='me-4 p-2 bg-white rounded' >
         <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='Enter Neighbourhood' className='bg-transparent border-0 ' style={{outline:'none'}}/>
         <i class="fa-solid fa-magnifying-glass fa-rotate-90 text-black"></i>
        </div>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header