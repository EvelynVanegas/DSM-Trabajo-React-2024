import './Login.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Login() {

    return (
        <div className="justify-content-end">
            <NavDropdown title="Identificate" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    );
}

export default Login;
