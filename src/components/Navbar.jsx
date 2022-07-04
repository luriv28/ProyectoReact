import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FaShoppingCart } from 'react-icons/fa'

// import ItemsListCart from '../ItemsListCart/ItemsListCart'



const NavBarMenu = () => {
  return <>
 <Navbar bg="dark" variant="dark"  className='Navbar-Items'>
    <Container>
    <Navbar.Brand href="#home">Vintage Vibes</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" className='Itemnav'>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
      </Container>
      <FaShoppingCart className='yellow'/>
  </Navbar>
</>
  
}

export default NavBarMenu