import './CarroCompra.css'

import React, { useState, useContext } from 'react';
import { BsCartFill } from "react-icons/bs";

import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formulario from './Formulario';

import ListItemCarro from './ListItemCarro';

import AutContext from '../../../../Almacen/AutContext';

function CarroCompra() {
    const [showCart, setShowCart] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);

    const { cartItems } = useContext(AutContext);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    const handleOrder = () => setShowConfirmation(true);
    const handleCloseConfirmation = () => setShowConfirmation(false);

    const handleShowFormModal = () => {
        setShowFormModal(true);
        setShowConfirmation(false);
    };

    const handleCloseFormModal = () => setShowFormModal(false);

    return (
        <>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto">
                <BsCartFill size={35} onClick={handleShowCart} style={{ color: 'black' }} />
            </Navbar.Toggle>

            <Navbar.Offcanvas id="offcanvasNavbar" show={showCart} onHide={handleCloseCart} placement="end">
                <Offcanvas.Header closeButton className='OffcanvasHeader'>
                    <Offcanvas.Title style={{ fontSize: '2em', fontWeight: 'bold' }}>
                        Carrito de la compra
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length === 0 ? (
                        <p style={{ fontSize: '1.5em', color: 'gray' , fontWeight: 'bold' }}>Vacío</p>
                    ) : (
                        <ListItemCarro cartItems={cartItems} />
                    )}
                    {cartItems.length > 0 && (
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" onClick={handleOrder} className='mb-2'>Realizar pedido</Button>
                        </div>
                    )}
                </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '500px', overflow: 'auto' }}>
                    <ListItemCarro cartItems={cartItems} />
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
