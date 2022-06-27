import React from 'react'
// import "bootswatch/dist/quartz/bootstrap.min.css";
import {Container, Nav, Offcanvas, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import useSound from 'use-sound';
import menuClick from '../sounds/switch-on.mp3';


let username = "user";

export function Navigation(){
  const [playMenuClick] = useSound(menuClick);
  // const location = useLocation();
    return (
        <>
        {/* <Navbar class="navbar navbar-expand-lg navbar-dark bg-primary" style={{backgroundColor: "#e83283"}}>
          <Container class="container-fluid">
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
            <img src='images/TriviaBlitz Logo.png' style={{width:"15%", height:"15%", left:"70%", margin: "auto", display:"block"}}/>
            <Nav.Link href="/scores">Scores</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}

          <Navbar bg="navbar-expand-lg navbar-dark primary" style={{backgroundColor: "#e83283"}} expand={false} className="mb-3">
            <Container fluid>
              <img src='images/TriviaBlitz Logo.png' style={{width:"15%", height:"15%", left:"70%", marginLeft: "43%", display:"block"}}/>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement="end"
                style={{backgroundColor: "#e83283", color:"white"}}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/scores">Scores</Nav.Link>
            
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </>      
    );
}

export default Navigation;