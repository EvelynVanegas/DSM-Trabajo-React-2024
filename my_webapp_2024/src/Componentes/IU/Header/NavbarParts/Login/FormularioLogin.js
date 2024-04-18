import './FormularioLogin.css';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Nav from 'react-bootstrap/Nav';

function FormularioLogin() {

    /* Variables del Form */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => { // event.preventDefault(); // Evita que se recargue la página al enviar el formulario */

        /* Verificar con la BBDD de los usuarios */
        const users = {
            email: "evevanetene@gmail.com",
            password: "a"
        }

        if (email === users.email && password === users.password) {
            alert('Inicio de sesión exitoso');
            // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
        } else {
            alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
        }
    };

    return (
        <Form className="custom-form">

            <Form.Group as={Row} className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Row} className="mb-10" controlId="formGridPassword">
                <Button variant="primary" type="submit">
                    Submit
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