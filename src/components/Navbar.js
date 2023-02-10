import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavbarStyles.css";
import { NavLink } from 'react-router-dom';
 
function Navbar1() {
  return ( 
    <>
      <Navbar sticky="top" expand="lg" variant="dark" className="top-container">
      <Container>
        <Navbar.Brand id="h1" href="/">@adityakahanhai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <NavLink className="ul-links" to="/">Home</NavLink>
            <NavLink className="ul-links" to="/about">About</NavLink>
            <NavLink className="ul-links" to="/project">Project</NavLink>
            <NavLink className="ul-links" to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbar1;