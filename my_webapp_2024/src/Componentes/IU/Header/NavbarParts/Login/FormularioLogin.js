import './FormularioLogin.css';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

import axios from 'axios';

function FormularioLogin(props) {

    /* Variables del Form */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario */

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        // [API_KEY] -> por la key que nos da firebase AIzaSyBrMLxhi9iQ9qX8lSMqY2B6_EISzryOI9Q
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrMLxhi9iQ9qX8lSMqY2B6_EISzryOI9Q', authData)
        .then((response)=>{
            console.log(response);
            props.updateLogin(true, response.data, email);
            alert('Ha entrado correctamente');
        }).catch((error) => {
            alert('Usuario o contraseña incorrecto');
        })
    };

    return (
        <Form className="custom-form" onSubmit={submitHandler}>

            <Form.Group as={Row} className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>

            <Form.Group as={Row} className="mb-10" controlId="formGridPassword">
                <Button variant="success" type="submit">
                    Entrar
                </Button>
            </Form.Group>

            <Form.Group as={Row} className="mb-10" controlId="formGridPassword">
                <Nav
                    activeKey="/home"
                >
                    <Nav.Item>
                        <Nav.Link href="/NuevoUsuario" className="custom-nav-link">Nuevo Usuario</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Form.Group>

        </Form>

    );
}

export default FormularioLogin;