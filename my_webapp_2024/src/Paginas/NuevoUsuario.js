import './NuevoUsuario.css';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Inicio = () => {

    const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('');
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('');

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
        const provincia = event.target.value;
        setProvinciaSeleccionada(provincia);
        setLocalidadSeleccionada(''); // Reiniciar la localidad seleccionada al cambiar la provincia
    };

    return (
        <div className='container-registration'>
            <Form className='form-registration'>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName" className="me-5">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="last-name" placeholder="Apellidos" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className="me-5">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Intoduce tu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridProvincia" className="me-5">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Select value={provinciaSeleccionada} onChange={handleProvinciaChange}>
                            <option value="">Elegir...</option>
                            {comunidadesAutonomas.map((comunidadAutonoma, index) => (
                                <option key={index}>{comunidadAutonoma}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLocalidad">
                        <Form.Label>Localidad</Form.Label>
                        <Form.Select value={localidadSeleccionada} onChange={(e) => setLocalidadSeleccionada(e.target.value)}>
                            <option value="">Elegir...</option>
                            {localidadesPorProvincia[provinciaSeleccionada]?.map((localidad, index) => (
                                <option key={index}>{localidad}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-4" controlId="formGridAddress">
                    <Form.Label>Dirección</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Calle" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Portal" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Piso" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Puerta" />
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

export default Inicio;