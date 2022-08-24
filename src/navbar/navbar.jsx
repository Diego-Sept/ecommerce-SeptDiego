import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import logo from './assets/logo.svg';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Lorem ipsum logo"
            />
            Lorem ipsum
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories">
              <NavDropdown.Item href="#mothers">Mothers</NavDropdown.Item>
              <NavDropdown.Item href="#micros">Processors</NavDropdown.Item>
              <NavDropdown.Item href="#power">Power supplies</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav>
          <Nav>
            <ItemListContainer placement={'end'} />
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;