import './Footer.css';
import React from 'react';

import logo from './logo.png';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-footer">
      <Container fluid>
        <Col>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Col>
        <Col>
          <Nav>
            <Nav.Item>
              <Nav.Link>BONSEM</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/NuevoUsuario">Registrarse</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Nav className="flex-column">
            <Nav.Item>
              <h6 className="text-center">Datos de Información</h6>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Email: info@example.com</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Teléfono: +123456789</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;