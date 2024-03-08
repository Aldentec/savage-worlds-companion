import './App.css'
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Container, Button, Navbar, Nav, Modal } from 'react-bootstrap';
import { CharacterCreationProvider } from './Context/CharacterCreationContext';
import { CreationWizard } from './Components/Characters/Creator/CreationWizard';
import { NPCGenerator } from './Components/NPCs/Generator/NPCGenerator';
import SignUpPage from './Components/Utils/SignUp';

import awsconfig from './aws-exports'; // Path to your aws-exports.js file
Amplify.configure(awsconfig);

const HomePage = ({ onOpenCharacterCreator, onOpenNPCGenerator, onOpenSignUp }) => { // Add onOpenNPCGenerator to the props
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Savage Worlds Companion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* Add other navigation links as needed */}
            <Nav.Link onClick={onOpenCharacterCreator}>Character Creator</Nav.Link>
            <Nav.Link onClick={onOpenNPCGenerator}>NPC Generator</Nav.Link>
            <Nav.Link onClick={onOpenSignUp}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="my-5">
        <h1>Welcome to the Savage Worlds Character Creator!</h1>
        <p className="lead">Create your unique character for any Savage Worlds adventure.</p>
        <p>Start by giving your character a name, choosing their race, and customizing their attributes, edges, and hindrances.</p>
        <Button variant="primary" onClick={onOpenCharacterCreator}>Start Creating Your Character</Button>
      </Container>
      
    </>
  );
};

const App = () => {
  const [showCreator, setShowCreator] = useState(false);
  const [showNPCGenerator, setShowNPCGenerator] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOpenCharacterCreator = () => setShowCreator(true);
  const handleCloseCharacterCreator = () => setShowCreator(false);

  const handleOpenNPCGenerator = () => setShowNPCGenerator(true);
  const handleCloseNPCGenerator = () => setShowNPCGenerator(false);

  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  return (
    <CharacterCreationProvider>
      <HomePage 
        onOpenCharacterCreator={handleOpenCharacterCreator} 
        onOpenNPCGenerator={handleOpenNPCGenerator}
        onOpenSignUp={handleOpenSignUp}
      />
      <Modal show={showCreator} onHide={handleCloseCharacterCreator} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Character Creation Wizard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreationWizard />
        </Modal.Body>
      </Modal>
      <Modal show={showNPCGenerator} onHide={handleCloseNPCGenerator} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>NPC Generator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NPCGenerator /> {/* Render the NPCGenerator component */}
        </Modal.Body>
      </Modal>
      <Modal show={showSignUp} onHide={handleCloseSignUp} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <SignUpPage /> {/* Render the NPCGenerator component */}
        </Modal.Body>
      </Modal>
    </CharacterCreationProvider>
  );
};

export default App;
