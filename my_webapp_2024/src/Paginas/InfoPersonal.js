import './InfoPersonal.css';
import React, { useEffect, useState, useContext } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faMapMarkerAlt, faRoad, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import AutContext from '../Almacen/AutContext';

const InfoPersonal = () => {
    const [user, setUser] = useState(null);
    const contextAut = useContext(AutContext);

    useEffect(() => {
        axios.get('https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/users.json')
            .then((response) => {
                const usersArray = Object.entries(response.data).map(([id, userData]) => ({
                    id: id,
                    ...userData
                }));
                const userWithEmail = usersArray.find(user => user.email === contextAut.loginEmail);
                if (userWithEmail) {
                    setUser(userWithEmail);
                } else {
                    console.log("Usuario no encontrado");
                }
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [contextAut.loginEmail]);

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <MDBContainer className='container-allpage'>
            <MDBRow>
                <MDBCol>
                    <MDBCard style={{ borderRadius: '.5rem' }}>
                        <MDBRow className="g-0">
                            <MDBCol className="gradient-custom d-flex flex-column justify-content-center align-items-center text-white"
                                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                <FaUserCircle size={250} className="my-3" alt="Avatar" />
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
                                            <MDBCardText className="text-muted">{user.calle}, {user.portal}</MDBCardText>
                                        </MDBCol>
                                        <MDBCol size="6" className="mb-3">
                                            <MDBTypography tag="h5">Piso <FontAwesomeIcon icon={faBuilding} /> </MDBTypography>
                                            <MDBCardText className="text-muted">{user.piso}º, {user.puerta}</MDBCardText>
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