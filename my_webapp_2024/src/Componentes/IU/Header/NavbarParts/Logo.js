import './Logo.css'
import logo from './img/logo.png';
import Navbar from 'react-bootstrap/Navbar';

function Logo() {

    return (
        <Navbar.Brand href="#">
            <img src={logo} alt="logo" height="50" className="d-inline-block align-top" />
        </Navbar.Brand>
    );
}

export default Logo;