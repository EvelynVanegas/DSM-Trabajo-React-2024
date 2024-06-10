import './MisPedidos.css';
import React, { useState, useEffect, useContext } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

import AutContext from '../../src/Almacen/AutContext';

const MisPedidos = () => {

    const [pedidos, setPedidos] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [selectedPedido, setSelectedPedido] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const { idToken, loginEmail } = useContext(AutContext);

    const handleOpenModal = (pedido) => {
        setSelectedPedido(pedido);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowConfirmation(false); // Resetear el estado de confirmación
    };

    const handleDeleteConfirmation = (pedido) => {
        setSelectedPedido(pedido);
        setShowConfirmation(true);
    };

    const handleDeletePedido = async () => {
        try {
            await axios.delete(`https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos/${selectedPedido.id_pedido}.json?auth=${idToken}`);
            setPedidos(pedidos.filter(pedido => pedido.id_pedido !== selectedPedido.id_pedido));
        } catch (error) {
            console.error("Error deleting pedido: ", error);
        }

        handleCloseModal();
    };

    /* Pedir JSON de la lista de productos segun el usuario */
    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await axios.get(`https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?auth=${idToken}`);
                console.log(idToken);
                
                if (response.data) {
                    const fetchedPedidos = Object.keys(response.data).map(key => ({
                        id_pedido: key,
                        ...response.data[key]
                    })).filter(pedido => pedido.email_user === loginEmail);
                    setPedidos(fetchedPedidos);
                }
            } catch (error) {
                console.error("Error fetching pedidos: ", error);
            }
        };

        fetchPedidos();
    }, [idToken, loginEmail]);

    return (
        <div className="d-flex justify-content-center align-items-center mb-5">
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title className="custom-title">MIS PEDIDOS</Card.Title>
                    {pedidos.length === 0 ? (
                        <p className="text-center text-muted">No hay pedidos</p>
                    ) : (
                        <ListGroup>
                            <ListGroup.Item className='custom-Item-fila0'>
                                <Row>
                                    <Col>ID Pedido</Col>
                                    <Col>Detalles Pedido</Col>
                                    <Col>Total</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className='custom-Item-fila0-1'>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <Row className='custom-Item-fila0-1-row'>
                                            <Col>Nombre</Col>
                                            <Col>Cantidad</Col>
                                            <Col>Precio</Col>
                                        </Row>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </ListGroup.Item>
                            <div className="scrollable-list">
                                {pedidos.map((pedido, index) => (
                                    <ListGroup.Item key={index} action className='custom-Item' onClick={() => handleOpenModal(pedido)}>
                                        <Row className='custom-rows'>
                                            <Col>{pedido.id_pedido}</Col>
                                            <Col>
                                                {pedido.ListaProductos.map((producto, i) => (
                                                    <Row key={i}>
                                                        <Col>{producto.name}</Col>
                                                        <Col>{producto.cantidad}</Col>
                                                        <Col>{producto.price}</Col>
                                                    </Row>
                                                ))}
                                            </Col>
                                            <Col>{pedido.Total}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </div>
                        </ListGroup>
                    )}
                </Card.Body>
            </Card>
            <Modal show={showModal && !showConfirmation} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ID: {selectedPedido && selectedPedido.id_pedido}</p>
                    <p>Detalle del Pedido:</p>
                    <ul>
                        {selectedPedido &&
                            selectedPedido.ListaProductos.map((producto, index) => (
                                <li key={index}>
                                    {producto.name} - Cantidad: {producto.cantidad} - Precio Unitario: {producto.price}
                                </li>
                            ))}
                    </ul>
                    <p>Total: {selectedPedido && selectedPedido.Total}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={() => handleDeleteConfirmation(selectedPedido)}>
                        Eliminar pedido
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Modal de confirmación para eliminar */}
            <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas eliminar este pedido?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDeletePedido}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default MisPedidos;