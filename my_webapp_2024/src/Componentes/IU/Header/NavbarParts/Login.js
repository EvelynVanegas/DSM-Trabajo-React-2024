import './Login.css';

import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';

import AutContext from '../../../../Almacen/AutContext';
import FormularioLogin from './Login/FormularioLogin';
import InfoUsuario from './Login/InfoUsuario';

function Login(props) {

    const contextAut = useContext(AutContext);

    return (
        <NavDropdown title={<FaUser />} align="end" className='me-3'>
            {contextAut.login
            ? <InfoUsuario updateLogin={props.updateLogin}/>
            : <FormularioLogin updateLogin={props.updateLogin}/>
            }
        </NavDropdown>
    );
}

export default Login;