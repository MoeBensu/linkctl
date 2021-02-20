import React from 'react';
import { Navbar, Row, Col, Jumbotron, Container } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="home"> @Elchapo/URL</Navbar.Brand>
      </Navbar>

      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Header;
