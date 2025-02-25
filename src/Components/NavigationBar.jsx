import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand as={NavLink} to="/Home">
                Atelier React
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink 
                    to="/Home" 
                    className={({ isActive }) => 
                      isActive ? "nav-link text-white text-decoration-underline" : "nav-link text-white"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/event" 
                    className={({ isActive }) => 
                      isActive ? "nav-link text-white text-decoration-underline" : "nav-link text-white"
                    }
                  >
                    My Events
                  </NavLink>
                  <NavLink 
                    to="/events" 
                    className={({ isActive }) => 
                      isActive ? "nav-link text-white text-decoration-underline" : "nav-link text-white"
                    }
                  >
                    Events
                  </NavLink>
           
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
}

export default NavBar;
