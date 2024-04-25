import './Header.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./NavbarParts/Logo"
import Login from "./NavbarParts/Login"
import CarroCompra from "./NavbarParts/CarroCompra"

function Header(props) {

    return (
        <>
            <Navbar key='false' expand='false' className="mb-5 custom-navbar">
                <Container fluid>

                    {/* LOGO */}
                    <Logo />

                    <div className="d-flex justify-content-end align-items-center me-4">
                        {/* LOG IN */}
                        <Login updateLogin={props.updateLogin}/>

                        {/* CARRO DE LA COMPRA */}
                        <CarroCompra />
                    </div>

                </Container>
            </Navbar>
        </>
    );
}

export default Header;
