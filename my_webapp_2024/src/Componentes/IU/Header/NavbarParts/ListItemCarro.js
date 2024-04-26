import './ListItemCarro.css';

import React from 'react';
import { BsBasket3, BsCashCoin } from "react-icons/bs";
import { RiTreeLine } from "react-icons/ri";

import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ListItemCarro(props) {
    
    // Calcular el total de la compra
    const total = props.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <Offcanvas.Body className='OffcanvasBody'>
            {props.cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="mb-4 list-item-border">
                    <Row>
                        <Col xs={2} className="d-flex align-items-center"><RiTreeLine /></Col>
                        <Col xs={10} className="d-flex align-items-center"><strong>{item.name}</strong></Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="d-flex align-items-center"><BsCashCoin /></Col>
                        <Col xs={6} className="d-flex align-items-center"><span>{item.price} €</span></Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="d-flex align-items-center"><BsBasket3 /></Col>
                        <Col xs={6} className="d-flex align-items-center"><span>x {item.quantity}</span></Col>
                    </Row>
                </ListGroup.Item>
            ))}
            <div className="text-end">
                <strong>Total: {total} €</strong>
            </div>
        </Offcanvas.Body>
    );
}

export default ListItemCarro;