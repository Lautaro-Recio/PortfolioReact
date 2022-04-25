import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Nav,NavDropdown } from 'react-bootstrap';
import Vidas from '../Vidas/Vidas';
import './NavBar.css';


export default function NavBar (){   

    return( 
    <>
        <Navbar className="sticky" bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">LR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#QuienSoy">Quien soy?</Nav.Link>
                <Nav.Link href="#HabilidadesEstudios">Habilidades y Estudios</Nav.Link>
                <Nav.Link href="#Proyectos">Proyectos</Nav.Link>
                <Nav.Link href="#Contacto">Contacto</Nav.Link>
                <Vidas/>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
};
