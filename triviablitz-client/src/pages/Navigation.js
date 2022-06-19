import {Container, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export function Navigation(){
    return(
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation;