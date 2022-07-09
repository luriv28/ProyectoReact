import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import { GiConcentricCrescents } from "react-icons/gi";
import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";
const NavBarMenu = () => {
  const onAdd = () => {
    console.log("click");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <GiConcentricCrescents className="red" />
          <Navbar.Brand href="#home">VINTAGE VIBES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="Itemnav">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
        <ItemCount stock={6} initial={1} onAdd={onAdd} />
        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBarMenu;
