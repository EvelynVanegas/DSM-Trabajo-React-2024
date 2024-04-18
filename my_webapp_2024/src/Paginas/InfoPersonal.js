import './InfoPersonal.css'
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faMapMarkerAlt, faRoad, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';

const InfoPersonal = () => {

    const users = {
        user: {
            id: 123456,
            name: "Menganito",
            email: "menganito@gmail.com",
            address: "Calle M1",
            tlf: 66666666666
        }
    };

    const user = users.user;

    return (
        <MDBContainer className='container-allpage'>
            <MDBRow>
                <MDBCol>
                    <MDBCard style={{ borderRadius: '.5rem' }}>
                        <MDBRow className="g-0">
                            <MDBCol className="gradient-custom d-flex flex-column justify-content-center align-items-center text-white"
                                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="Avatar" className="my-3" style={{ width: '200px' }} fluid />
                                <MDBTypography tag="h1" className="text-center">{user.name}</MDBTypography>
                                <MDBCardText className="text-center">#{user.id}</MDBCardText>
                            </MDBCol>
                            <MDBCol md="8">
                                <MDBCardBody className="p-4" style={{ minHeight: '500px' }}>
                                    <MDBTypography tag="h1" className="text-center p-4">Informacion personal <FontAwesomeIcon icon={faUser} /> </MDBTypography>
                                    <hr className="mb-5" />
                                    <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h5">Email <FontAwesomeIcon icon={faEnvelope} /></MDBTypography>
                                            <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h5">Phone <FontAwesomeIcon icon={faMobileAlt} /></MDBTypography>
                                            <MDBCardText className="text-muted">{user.tlf}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBTypography tag="h3" className="text-center p-4">Dirección <FontAwesomeIcon icon={faMapMarkerAlt} /> </MDBTypography>
                                    <hr className="mb-4" />
                                    <MDBRow className="pt-1">
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h5">Calle <FontAwesomeIcon icon={faRoad} /> </MDBTypography>
                                            <MDBCardText className="text-muted">{user.address}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h5">Piso <FontAwesomeIcon icon={faBuilding} /> </MDBTypography>
                                            <MDBCardText className="text-muted">{user.address}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>

                                    <Button variant="outline-warning">Editar info</Button>{' '}
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default InfoPersonal;