import './InfoUsuario.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

function InfoUsuario(props) {

    /* Obtener JSON con la información del usuario */
    const user = {
        name: "Usuario"
    }

    const logoutHandler = () => {
        props.updateLogin(false, {}, null);
    }

    return (
        <div className="info-usuario-container">
            <NavDropdown.ItemText className='mb-3 item-text'>{user.name}</NavDropdown.ItemText>
            <NavDropdown.Item href="/InfoPersonal">
                Información personal
            </NavDropdown.Item>
            <NavDropdown.Item href="/MisPedidos">
                Mis pedidos
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logoutHandler} href="/">
                Cerrar sesión
            </NavDropdown.Item>
        </div>
    );
}

export default InfoUsuario;
