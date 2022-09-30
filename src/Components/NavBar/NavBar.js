import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Nav } from 'react-bootstrap';
import './NavBar.css';
import { useState } from 'react';


export default function NavBar (){ 
    const [cambio, setCambio ] = useState(false)
    window.addEventListener("scroll",()=>{
        if(window.scrollY ===0){
            setCambio(false)
        } else{
            setCambio(true)
 
        }

    })

    return( 
    <>
        <Navbar className="sticky " bg={cambio===false?"light":"dark"} expand="lg">
        <Container>
            <Navbar.Brand href="#home"><h2>LR</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#QuienSoy">Quien soy?</Nav.Link>
                <Nav.Link href="#HabilidadesEstudios">Habilidades y Estudios</Nav.Link>
                <Nav.Link href="#Proyectos">Proyectos</Nav.Link>
                <Nav.Link href="#Contacto">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
};
