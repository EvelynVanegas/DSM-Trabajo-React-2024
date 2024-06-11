import './InfoUsuario.css';
import React, { useContext } from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';
import AutContext from '../../../../../Almacen/AutContext';

function InfoUsuario(props) {

    const { loginEmail } = useContext(AutContext);

    const logoutHandler = () => {
        props.updateLogin(false, {}, null);
    }

    return (
        <div className="info-usuario-container">
            <NavDropdown.ItemText className='mb-3 item-text'>{loginEmail}</NavDropdown.ItemText>
            <NavDropdown.Item href="/InfoPersonal" className='item-text-sub'>
                Información personal
            </NavDropdown.Item>
            <NavDropdown.Item href="/MisPedidos" className='item-text-sub'>
                Mis pedidos
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logoutHandler} href="/" className='item-text-sub'>
                Cerrar sesión
            </NavDropdown.Item>
        </div>
    );
}

export default InfoUsuario;