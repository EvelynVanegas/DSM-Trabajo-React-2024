import './NuevoUsuario.css';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

const NuevoUsuario = (props) => {

    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');

    // Lista de comunidades autónomas de España
    const comunidadesAutonomas = [
        'Andalucía',
        'Aragón',
        'Asturias',
        'Baleares',
        'Canarias',
        'Cantabria',
        'Castilla y León',
        'Castilla-La Mancha',
        'Cataluña',
        'Comunidad Valenciana',
        'Extremadura',
        'Galicia',
        'La Rioja',
        'Madrid',
        'Murcia',
        'Navarra',
        'País Vasco'
    ];

    // Objeto con localidades asociadas a cada provincia
    const localidadesPorProvincia = {
        'Andalucía': ['Sevilla', 'Málaga', 'Cádiz', 'Huelva', 'Granada', 'Almería', 'Córdoba', 'Jaén', 'Dos Hermanas', 'Jerez de la Frontera', 'Algeciras', 'Marbella'],
        'Aragón': ['Zaragoza', 'Huesca', 'Teruel', 'Calatayud', 'Ejea de los Caballeros', 'Fraga', 'Jaca'],
        'Asturias': ['Oviedo', 'Gijón', 'Avilés', 'Siero', 'Langreo', 'Mieres', 'Castrillón', 'Las Regueras'],
        'Baleares': ['Palma de Mallorca', 'Ibiza', 'Menorca', 'Formentera', 'Manacor', 'Llucmajor', 'Ibiza Ciudad'],
        'Canarias': ['Las Palmas de Gran Canaria', 'Santa Cruz de Tenerife', 'San Cristóbal de La Laguna', 'Telde', 'Arrecife', 'Arucas', 'La Orotava'],
        'Cantabria': ['Santander', 'Torrelavega', 'Camargo', 'Piélagos', 'Santoña', 'Laredo', 'San Vicente de la Barquera'],
        'Castilla y León': ['Valladolid', 'Burgos', 'León', 'Salamanca', 'Palencia', 'Zamora', 'Segovia', 'Ávila', 'Miranda de Ebro', 'Ponferrada'],
        'Castilla-La Mancha': ['Toledo', 'Albacete', 'Ciudad Real', 'Guadalajara', 'Cuenca', 'Puertollano', 'Talavera de la Reina'],
        'Cataluña': ['Barcelona', 'Lérida', 'Gerona', 'Tarragona', 'Badalona', 'Sabadell', 'Mataró', 'Santa Coloma de Gramanet', 'Terrassa'],
        'Comunidad Valenciana': ['Valencia', 'Alicante', 'Castellón de la Plana', 'Elche', 'Torrevieja', 'Torrent', 'Orihuela', 'Gandía'],
        'Extremadura': ['Mérida', 'Badajoz', 'Cáceres', 'Plasencia', 'Almendralejo', 'Don Benito', 'Villanueva de la Serena'],
        'Galicia': ['La Coruña', 'Vigo', 'Lugo', 'Santiago de Compostela', 'Orense', 'Pontevedra', 'Ferrol', 'Narón'],
        'La Rioja': ['Logroño', 'Calahorra', 'Arnedo', 'Haro', 'Alfaro', 'Lardero', 'Nájera'],
        'Madrid': ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada', 'Leganés', 'Getafe', 'Alcorcón', 'Torrejón de Ardoz', 'Parla'],
        'Murcia': ['Murcia', 'Cartagena', 'Lorca', 'Molina de Segura', 'Alcantarilla', 'Cieza', 'Águilas', 'San Javier'],
        'Navarra': ['Pamplona', 'Tudela', 'Barañáin', 'Estella', 'Tafalla', 'Alsasua', 'Burlada'],
        'País Vasco': ['Bilbao', 'Vitoria', 'San Sebastián', 'Baracaldo', 'Getxo', 'Irun', 'Portugalete', 'Santurce']
    };


    const handleProvinciaChange = (event) => {
        const provincia_a = event.target.value;
        setProvincia(provincia_a);
        setLocalidad(''); // Reiniciar la localidad seleccionada al cambiar la provincia
    };


    /* Variables del Form */
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [calle, setCalle] = useState('');
    const [portal, setPortal] = useState('');
    const [piso, setPiso] = useState('');
    const [puerta, setPuerta] = useState('');

    // Registrar en la BBDD nuevos usuarios
    const submitHandler = (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario */

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        // [API_KEY] -> por la key que nos da firebase AIzaSyBrMLxhi9iQ9qX8lSMqY2B6_EISzryOI9Q
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrMLxhi9iQ9qX8lSMqY2B6_EISzryOI9Q', authData)
            .then((response) => {
                console.log(response);
                props.updateLogin(true, response.data);
                alert('Se ha registrado correctamente');
                window.location.href = '/';
            }).catch((error) => {
                alert('Usuario o contraseña incorrecto');
            })
    };

    useEffect(() => {
        console.log('Yo que se');
    });

    return (
        <div className='container-registration'>
            <Form className='form-registration' onSubmit={submitHandler}>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName" className="me-5">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className="me-5">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridProvincia" className="me-5">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Select value={provincia} onChange={handleProvinciaChange}>
                            <option value="">Elegir...</option>
                            {comunidadesAutonomas.map((comunidadAutonoma, index) => (
                                <option key={index}>{comunidadAutonoma}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLocalidad">
                        <Form.Label>Localidad</Form.Label>
                        <Form.Select value={localidad} onChange={(e) => setLocalidad(e.target.value)}>
                            <option value="">Elegir...</option>
                            {localidadesPorProvincia[provincia]?.map((localidad, index) => (
                                <option key={index}>{localidad}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-4" controlId="formGridAddress">
                    <Form.Label>Dirección</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Calle" type='text' value={calle} onChange={(event) => setCalle(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Portal" type='text' value={portal} onChange={(event) => setPortal(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Piso" type='text' value={piso} onChange={(event) => setPiso(event.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Puerta" type='text' value={puerta} onChange={(event) => setPuerta(event.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Button variant="outline-light" size="lg" type="submit">
                    Registrar
                </Button>
            </Form>

        </div>
    )
}

export default NuevoUsuario;