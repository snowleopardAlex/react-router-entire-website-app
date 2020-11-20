import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
  <Navbar bg="warning" expand="lg">
  <Navbar.Brand href="/">React-Router</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/about">About</Link></Nav.Link>
      <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
      <Nav.Link><Link to="/services">Services List</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
       
    )
}

export default Header;



