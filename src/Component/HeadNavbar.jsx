import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HeadNavbar() {
  return (
    <div>
          <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/">
                  <h1>HOME</h1>
                </Link>
                <Link to="/Skills">
                  <h1>SKILLS</h1>
                </Link>
                <Link to="/Edu_History">
                  <h1>EDUCATION HISTORY</h1>
                </Link>
                <Link to="/Intership">
                  <h1>INTERSHIP</h1>
                </Link>
                <Link to="/Project">
                  <h1>PROJECT</h1>
                </Link>
                <Link to="/Contact">
                  <h1>CONTACT</h1>
                </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeadNavbar