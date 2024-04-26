import React, { useState, useEffect, useContext } from 'react';
import './Bonsai.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import AutContext from '../../Almacen/AutContext';

function Bonsai(props) {
    const [quantity, setQuantity] = useState(0);
    const { cartItems, updateCartItems } = useContext(AutContext);

    // Verificar si el producto ya está en el carrito y obtener su cantidad
    useEffect(() => {
        const existingItem = cartItems.find(item => item.id === props.bonsai.id);
        if (existingItem) {
            setQuantity(existingItem.quantity);
        } else {
            setQuantity(0);
        }
    }, [cartItems, props.bonsai.id]);

    const handleAdd = () => {
        const existingItemIndex = cartItems.findIndex(item => item.id === props.bonsai.id);
        if (existingItemIndex !== -1) {
            // El producto ya está en el carrito, actualiza la cantidad
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            updateCartItems(updatedCartItems);
            setQuantity(quantity + 1);
        } else {
            // El producto no está en el carrito, añádelo
            const newItem = { id: props.bonsai.id, name: props.bonsai.name, price: props.bonsai.price, quantity: 1 };
            const updatedCartItems = [...cartItems, newItem]; // Añadir nuevo elemento
            updateCartItems(updatedCartItems);
            setQuantity(1);
        }
    };

    const handleRemove = () => {
        if (quantity > 0) {
            const existingItemIndex = cartItems.findIndex(item => item.id === props.bonsai.id);
            if (existingItemIndex !== -1) {
                // El producto está en el carrito, actualiza la cantidad
                const updatedCartItems = [...cartItems];
                updatedCartItems[existingItemIndex].quantity -= 1;
                if (updatedCartItems[existingItemIndex].quantity === 0) {
                    // Si la cantidad es 0, elimina el producto del carrito
                    updatedCartItems.splice(existingItemIndex, 1);
                }
                updateCartItems(updatedCartItems);
                setQuantity(quantity - 1);
            }
        }
    };

    const images = require.context('../Bonsais/imgs', true);
    const imgSrc = images(`./${props.bonsai.imageSrc}`);

    return (
        <OverlayTrigger
            placement="left"
            overlay={<Tooltip id={`tooltip-${props.bonsai.id}`}>{props.bonsai.info}</Tooltip>}
        >
            <Card className="mb-5 total-card">
                <Card.Header className="mb-2 card-head">
                    <Image
                        alt={props.bonsai.id}
                        src={imgSrc}
                        loading="lazy"
                        fluid
                    />
                </Card.Header>
                <Card.Body className="card-body">
                    <Card.Title>
                        {props.bonsai.name}
                    </Card.Title>
                    <Card.Text>
                        <span className="product-price__unit-price">
                            {props.bonsai.price} €
                        </span>
                    </Card.Text>
                    <div className="product-quantity-wrapper">
                        <span className="product-quantity__count">{quantity} Unidades</span>
                        <div className="quantity-btns">
                            <Button
                                variant="outline-success"
                                size="sm"
                                onClick={handleRemove}
                                disabled={quantity === 0}
                                className="quantity-btn"
                            >
                                -
                            </Button>
                            <Button
                                variant="outline-success"
                                size="sm"
                                onClick={handleAdd}
                                className="quantity-btn"
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </OverlayTrigger>
    );
}

export default Bonsai;