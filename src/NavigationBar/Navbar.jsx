import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import logo from './assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBar = ({cart, ...props}) => {

  return (
    <Navbar bg="dark" variant="dark" key={false}>
        <Container className="d-flex justify-content-between">
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
            <Nav.Link to={'/'}>Home</Nav.Link>
            <NavDropdown title="Categories">
              <NavDropdown.Item to={'/mothers'}>Mothers</NavDropdown.Item>
              <NavDropdown.Item to="">Processors</NavDropdown.Item>
              <NavDropdown.Item to="">Power supplies</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav>
          <Form className='d-flex' style={{ width: '50%' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark"><BsSearch /></Button>
          </Form>
          <Nav>
            <CartWidget placement={'end'} cart={cart} />
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;