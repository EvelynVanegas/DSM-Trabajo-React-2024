import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./NavbarParts/Logo"
import Login from "./NavbarParts/Login"
import CarroCompra from "./NavbarParts/CarroCompra"

function Header() {

    return (
        <>
            <Navbar key='false' expand='false' className="mb-5 custom-navbar">
                <Container fluid>
                    
                    {/* LOGO */}
                    <Logo />

                    {/* LOG IN */}
                    <Login />

                    {/* CARRO DE LA COMPRA */}
                    <CarroCompra />

                </Container>
            </Navbar>
        </>
    );
}

export default Header;
