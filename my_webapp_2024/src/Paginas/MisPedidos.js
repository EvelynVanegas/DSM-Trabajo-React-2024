import React, { useState } from 'react';
import './MisPedidos.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MisPedidos = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPedido, setSelectedPedido] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

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

    const handleDeletePedido = () => {
        // Aquí puedes implementar la lógica para eliminar el pedido
        // Por ejemplo, puedes hacer una solicitud a tu servidor para eliminar el pedido de la base de datos

        // Después de eliminar el pedido, cierra el modal
        handleCloseModal();
    };

    /* Pedir JSON de la lista de productos segun el usuario */
    const pedidos = [
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
    ];

    return (
        <div className="d-flex justify-content-center align-items-center mb-5">
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title className="custom-title">MIS PEDIDOS</Card.Title>
                    <ListGroup>
                        <ListGroup.Item className='custom-Item-fila0'>
                            <Row>
                                <Col>ID</Col>
                                <Col>Producto</Col>
                                <Col>Cantidad</Col>
                                <Col>Precio Unitario</Col>
                                <Col>Total</Col>
                            </Row>
                        </ListGroup.Item>
                        <div className="scrollable-list">
                            {pedidos.map((pedido, index) => (
                                <ListGroup.Item key={index} action className='custom-Item' onClick={() => handleOpenModal(pedido)}>
                                    <Row className='custom-rows'>
                                        <Col>{pedido.id}</Col>
                                        <Col>{pedido.producto}</Col>
                                        <Col>{pedido.cantidad}</Col>
                                        <Col>{pedido.precioUnitario}</Col>
                                        <Col>{pedido.cantidad * pedido.precioUnitario}</Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </div>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Modal show={showModal && !showConfirmation} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ID: {selectedPedido && selectedPedido.id}</p>
                    <p>Producto: {selectedPedido && selectedPedido.producto}</p>
                    <p>Cantidad: {selectedPedido && selectedPedido.cantidad}</p>
                    <p>Precio Unitario: {selectedPedido && selectedPedido.precioUnitario}</p>
                    <p>Total: {selectedPedido && selectedPedido.cantidad * selectedPedido.precioUnitario}</p>
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
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar este pedido?
                </Modal.Body>
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