import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AutContext from '../../../../Almacen/AutContext';

function Formulario() {
  const { loginEmail, cartItems, loginData } = useContext(AutContext);
  const [userData, setUserData] = useState(null);

  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('');
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState('');

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=${loginData.idToken}`);
        const users = response.data;

        // Buscar el usuario con el email correspondiente
        const user = Object.values(users).find(user => user.email === loginEmail);

        if (user) {
          // Establecer los datos del usuario en el estado
          setUserData(user);
          setProvinciaSeleccionada(user.provincia || '');
          setLocalidadSeleccionada(user.localidad || '');
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [loginEmail, loginData.idToken]);

  // Manejador de clics del botón "Realizar pedido"
  const handleOrder = async () => {
    try {
      // Obtener la información del usuario
      const userResponse = await axios.get(`https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=${loginData.idToken}`);
      const users = userResponse.data;
      const user = Object.values(users).find(user => user.email === loginEmail);

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      // Crear el objeto del pedido
      const pedido = {
        ListaProductos: cartItems.map(item => ({
          cantidad: item.quantity,
          name: item.name,
          price: item.price
        })),
        Total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        email_user: user.email
      };
      

      // Enviar el pedido a Firebase
      const response = await axios.post(`https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?auth=${loginData.idToken}`, pedido);

      // Verificar si la solicitud fue exitosa
      if (response.status === 200) {
        alert('¡Gracias por tu pedido!');
        window.location.href = '/';
      } else {
        throw new Error('Error al enviar el pedido a Firebase');
      }
    } catch (error) {
      console.error('Error enviando el pedido a Firebase: ', error);
      alert('Hubo un error al realizar tu pedido. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  // Manejador de cambios de provincia
  const handleProvinciaChange = (event) => {
    const provincia = event.target.value;
    setProvinciaSeleccionada(provincia);
    setLocalidadSeleccionada('');
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Nombre"
            defaultValue={userData ? userData.name : ''}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridApellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="last-name"
            placeholder="Apellidos"
            defaultValue={userData ? userData.lastName : ''}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            defaultValue={userData ? userData.email : ''}
            readOnly
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProvincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Select value={userData ? userData.provincia : ''} onChange={handleProvinciaChange}>
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
            <Form.Control
              placeholder="Calle"
              type="string"
              name="street"
              defaultValue={userData ? userData.calle : ''}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Portal"
              type="number"
              name="portal"
              defaultValue={userData ? userData.portal : ''}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Piso"
              type="string"
              name="floor"
              defaultValue={userData ? userData.piso : ''}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Puerta"
              type="string"
              name="door"
              defaultValue={userData ? userData.puerta : ''}
            />
          </Col>
        </Row>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleOrder}>
        Realizar pedido
      </Button>
    </Form>
  );
}

export default Formulario;