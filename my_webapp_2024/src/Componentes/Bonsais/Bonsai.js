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

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Información del bonsai
        </Tooltip>
    );

    // Ruta base de las imágenes
    const imgBasePath = '../Bonsais/imgs/';
    // Generar la ruta completa para la imagen de cada bonsái
    const imgSrc = imgBasePath + props.bonsai.imageSrc;

    console.log(typeof imgSrc);
    console.log(imgSrc);

    return (
        <OverlayTrigger
            placement="auto"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Card className="mb-5 total-card" style={{ maxWidth: '280px' }}>
                <Card.Header>
                    <Image
                        alt="BonsaiImg"//{props.bonsai.id}
                        src={imgSrc}
                        loading="lazy"
                        fluid
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.bonsai.name}</Card.Title>
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