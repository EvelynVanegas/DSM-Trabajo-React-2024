import React, { useState } from 'react';
import './Bonsai.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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

    // Importar todas las imágenes del directorio 'imgs' de manera dinámica
    const images = require.context('../Bonsais/imgs', true);
    // Obtener la ruta de la imagen específica según el nombre proporcionado en props
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