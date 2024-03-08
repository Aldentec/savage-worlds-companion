import React, { useState } from 'react';
import { Container, Button, Navbar, Nav, Modal } from 'react-bootstrap';
import { CharacterCreationProvider } from './Context/CharacterCreationContext';
import { CreationWizard } from './Components/Characters/Creator/CreationWizard';
import { NPCGenerator } from './Components/NPCs/Generator/NPCGenerator';

const HomePage = ({ onOpenCharacterCreator, onOpenNPCGenerator }) => { // Add onOpenNPCGenerator to the props
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

  const handleOpenCharacterCreator = () => setShowCreator(true);
  const handleCloseCharacterCreator = () => setShowCreator(false);

  const handleOpenNPCGenerator = () => setShowNPCGenerator(true);
  const handleCloseNPCGenerator = () => setShowNPCGenerator(false);

  return (
    <CharacterCreationProvider>
      <HomePage 
        onOpenCharacterCreator={handleOpenCharacterCreator} 
        onOpenNPCGenerator={handleOpenNPCGenerator}
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
    </CharacterCreationProvider>
  );
};

export default App;
