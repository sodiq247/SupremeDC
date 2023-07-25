import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';
import Vector from '../../Assets/images/Vector.svg'

function Header() {
  return (
    <Navbar className="main">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <img src={Vector} alt="" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
