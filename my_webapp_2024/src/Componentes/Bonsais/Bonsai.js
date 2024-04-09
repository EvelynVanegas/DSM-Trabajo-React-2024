import React, { useState } from 'react';
import './Bonsai.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Bonsai(props) {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Card className="mb-2">
            <Card.Header>
                <Image
                    alt={props.bonsai.id}
                    src={props.bonsai.imageSrc}
                    loading="lazy"
                    fluid
                />
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.bonsai.name}</Card.Title>
                <Card.Text>
                    <p className="product-price__unit-price">
                        {props.bonsai.price} €
                    </p>
                </Card.Text>
                <div className="product-quantity">
                    <Button
                        variant="secondary"
                        onClick={handleRemove}
                        disabled={quantity === 0}
                    >
                        -
                    </Button>
                    <span className="product-quantity__count">{quantity}</span>
                    <Button variant="secondary" onClick={handleAdd}>
                        +
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Bonsai;
