import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formulario from './Formulario';

function CarroCompra() {
    const [showCart, setShowCart] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);
    const [cartItems] = useState([]);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    const handleOrder = () => setShowConfirmation(true);
    const handleCloseConfirmation = () => setShowConfirmation(false);

    const handleShowFormModal = () => {
        setShowFormModal(true);
        setShowConfirmation(false); // Oculta el modal de confirmación al mostrar el formulario
    };

    const handleCloseFormModal = () => setShowFormModal(false);

    return (
        <>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto">
                <FaShoppingCart size={35} onClick={handleShowCart} style={{ color: 'black' }} />
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

            <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Detalles de nuestra compra, el total y la opción de CONTINUAR
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmation}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleShowFormModal}>
                        Continuar con el pedido
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFormModal} onHide={handleCloseFormModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Formulario dirección de envío</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formulario />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CarroCompra;
