import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";

let username = "user";

export function Navigation({username}){
  // const location = useLocation();
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">TriviaBlitz</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              {/* <Nav.Link href="/game">Game</Nav.Link> */}
              <Nav.Link href="/users">Users</Nav.Link>
              
            </Nav>
          </Container>
          Hello, {username}!
        </Navbar>
      </>
    );
}

export default Navigation;