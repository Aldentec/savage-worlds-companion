import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = ({ onOpenCharacterCreator, onOpenNPCGenerator, onOpenSignIn, onOpenSignUp, onLogout }) => {
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    // Additional logout logic...
    window.location.href = '/'; // Or trigger a full page reload or redirect to the home page
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Savage Worlds Companion</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={onOpenCharacterCreator}>Character Creator</Nav.Link>
          <Nav.Link onClick={onOpenNPCGenerator}>NPC Generator</Nav.Link>
          <NavDropdown title="Compendium" id="basic-nav-dropdown">
            <NavDropdown.Item href="/compendium/edges">Edges</NavDropdown.Item>
            <NavDropdown.Item href="/compendium/hindrances">Hindrances</NavDropdown.Item>
            <NavDropdown.Item href="/compendium/items">Items</NavDropdown.Item>
          </NavDropdown>
          {username ? (
            <>
              <Nav.Item style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                Hello, {username}! 
              </Nav.Item>
              <Nav.Link onClick={handleLogout}>Logout?</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={onOpenSignIn}>Sign In</Nav.Link>
              <Nav.Link onClick={onOpenSignUp}>Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
