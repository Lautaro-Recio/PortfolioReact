import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Nav } from 'react-bootstrap';
import './NavBar.css';
import { useState } from 'react';


export default function NavBar (){ 
    const [cambio, setCambio ] = useState(false)
    const [scroll, setScroll] =useState(0)
    window.addEventListener("scroll",()=>{
        if(window.scrollY ===0){
            setCambio(false)
        }else{
            setCambio(true)
        }

        setScroll(window.scrollY)

    })

    return( 
    <>
        <Navbar className="sticky " bg={cambio===false?"light":"dark"} expand="lg">
        <Container>
            <Navbar.Brand href="#QuienSoy"><h2>LR</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
                <Nav.Link className={(scroll >= 0 && scroll <= 399) ?"clicked":"noClicked"} href="#QuienSoy">Quien soy?</Nav.Link>
                <Nav.Link className={(scroll >= 400 && scroll <= 899) ?"clicked":"noClicked"} href="#HabilidadesEstudios">Habilidades y Estudios</Nav.Link>
                <Nav.Link className={(scroll >= 900 && scroll <= 1999) ?"clicked":"noClicked"} href="#Proyectos">Proyectos</Nav.Link>
                <Nav.Link className={(scroll >= 2000 && scroll <= 2800) ?"clicked":"noClicked"} href="#Contacto">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
    );
};
