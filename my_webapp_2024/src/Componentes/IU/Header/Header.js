import './Header.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './img/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
    return (
        <>
            <Navbar key='false' expand='false' className="custom-navbar mb-3" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo" height="50" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={false} className="navbar-toggle-black">
                        <FaShoppingCart size={35} />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                Carro de la compra
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            
                             {/* Aquí iremos rellenando la lista de compra del carrito */}

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;