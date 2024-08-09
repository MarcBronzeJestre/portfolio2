import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const CustomNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary rounded">
      <Container fluid>
        <Navbar.Brand href="#">Porfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto mb-2 mb-lg-0">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/features">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link>Projetcs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

export {}