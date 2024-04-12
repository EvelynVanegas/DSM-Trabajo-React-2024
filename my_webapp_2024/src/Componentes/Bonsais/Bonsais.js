import React from 'react';
import './Bonsais.css';
import Bonsai from "./Bonsai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bonsais({ bonsais, currentPage, bonsaisPerPage }) {
    
    // Calcula el índice del primer y último bonsai en la página actual
    const indexOfLastBonsai = currentPage * bonsaisPerPage;
    const indexOfFirstBonsai = indexOfLastBonsai - bonsaisPerPage;
    const currentBonsais = bonsais.slice(indexOfFirstBonsai, indexOfLastBonsai);

    const bonsaiComponents = currentBonsais.map((bonsai, index) => (
        <Col md={3} xs={5} key={index}>
            <Bonsai bonsai={bonsai} />
        </Col>
    ));

    return (
        <Container>
            <Row>
                {bonsaiComponents}
            </Row>
        </Container>
    );
}

export default Bonsais;
