import React from 'react'
// import "bootswatch/dist/quartz/bootstrap.min.css";
import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import useSound from 'use-sound';
import menuClick from '../sounds/switch-on.mp3';

let username = "user";

export function Navigation(){
  const [playMenuClick] = useSound(menuClick);
  // const location = useLocation();
    return (
      
        <Navbar class="navbar navbar-expand-lg navbar-dark bg-primary" style={{backgroundColor: "#e83283"}}>
          <Container class="container-fluid">
            <Navbar.Brand href="/">TriviaBlitz</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/scores">Scores</Nav.Link>
            </Nav>
          </Container>
        </Navbar>      
    );
}

export default Navigation;