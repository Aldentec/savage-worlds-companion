import './App.css';
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Container, Button, Modal } from 'react-bootstrap';
import { CharacterCreationProvider } from './Context/CharacterCreationContext';
import CreationWizard from './Components/Characters/Creator/CreationWizard';
import NPCGenerator from './Components/NPCs/Generator/NPCGenerator';
import SignUpPage from './Components/Utils/SignUp';
import SignIn from './Components/Utils/SignIn'; // Assuming you've created this
import Navigation from './Components/Utils/Navigation';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const [showCreator, setShowCreator] = useState(false);
  const [showNPCGenerator, setShowNPCGenerator] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // New state for the SignIn modal
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleOpenCharacterCreator = () => setShowCreator(true);
  const handleCloseCharacterCreator = () => setShowCreator(false);

  const handleOpenNPCGenerator = () => setShowNPCGenerator(true);
  const handleCloseNPCGenerator = () => setShowNPCGenerator(false);

  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleOpenSignIn = () => setShowSignIn(true); // New handler for opening SignIn modal
  const handleCloseSignIn = () => setShowSignIn(false); // New handler for closing SignIn modal

  const handleSignUpSuccess = () => {
    setShowSuccessAlert(true);
    handleCloseSignUp();
  };

  return (
    <CharacterCreationProvider>
      <Navigation
        onOpenCharacterCreator={handleOpenCharacterCreator}
        onOpenNPCGenerator={handleOpenNPCGenerator}
        onOpenSignUp={handleOpenSignUp}
        onOpenSignIn={handleOpenSignIn} // Passing the new handler
      />
      <Container className="my-5">
        <h4>WEBSITE CURRENTLY UNDER CONSTRUCTION</h4>
        <h1>Welcome to the Savage Worlds Character Creator!</h1>
        <Button variant="primary" onClick={handleOpenCharacterCreator}>Start Creating Your Character</Button>
      </Container>

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
          <NPCGenerator />
        </Modal.Body>
      </Modal>

      <Modal show={showSignUp} onHide={handleCloseSignUp} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> Sign Up </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpPage onSignUpSuccess={handleSignUpSuccess} onCloseModal={handleCloseSignUp} />
        </Modal.Body>
      </Modal>

      <Modal show={showSignIn} onHide={handleCloseSignIn} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> Sign In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn onCloseModal={handleCloseSignIn} /> {/* Implement this component based on your needs */}
        </Modal.Body>
      </Modal>

      {
        showSuccessAlert && (
          <div 
            className="alert alert-success alert-dismissible fade show" 
            role="alert" 
            style={{ position: 'fixed', width: '100%', top: '0px', zIndex: '1051' }}
          >
            You have signed up successfully!
            <button type="button" className="btn-close" onClick={() => setShowSuccessAlert(false)} aria-label="Close"></button>
          </div>
        )
      }
    </CharacterCreationProvider>
  );
};

export default App;
