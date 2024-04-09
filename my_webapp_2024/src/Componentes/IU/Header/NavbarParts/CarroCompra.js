import './CarroCompra.css'
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CarroCompra() {

    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleShowCart = () => setShowCart(true);

    const handleOrder = () => {
        setShowConfirmation(true);
    };

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCloseCart = () => setShowCart(false);


    const handleCloseConfirmation = () => setShowConfirmation(false);

    const handleConfirmOrder = () => {
        // Aquí podrías implementar la lógica para realizar el pedido
        alert('Pedido realizado');
        setCartItems([]);
        setShowConfirmation(false);
        handleCloseCart();
    };

    return (
        <>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbar-toggle-black">
                <FaShoppingCart size={35} onClick={handleShowCart} />
            </Navbar.Toggle>
            <Navbar.Offcanvas id="offcanvasNavbar" show={showCart} onHide={handleCloseCart} placement="end">

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de la compra</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <Button variant="primary" onClick={handleOrder}>Realizar pedido</Button>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* MODAL */}
            <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas realizar el pedido?</Modal.Body>
                <Modal.Body>Aqui una lista de todo el pedido + Total</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmation}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirmOrder}>
                        Confirmar pedido
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CarroCompra;


