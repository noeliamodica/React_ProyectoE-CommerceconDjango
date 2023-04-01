import React from 'react'
import {Container, Nav, Navbar, Row }  from 'react-bootstrap';



function Header() {
  return (
    <div>
        <header> 
     
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          
          </Nav>
            </Navbar.Collapse>
             </Container>
         </Navbar>


        </header>

    </div>
  )
}

export default Header