import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import here
import { Amplify } from 'aws-amplify';
import { Container, Button, Modal } from 'react-bootstrap';
import { CharacterCreationProvider } from './Context/CharacterCreationContext';
import CreationWizard from './Components/Characters/Creator/CreationWizard';
import NPCGenerator from './Components/NPCs/Generator/NPCGenerator';
import Compendium from './Components/Compendium/Compendium'; 
import SignUpPage from './Components/Utils/SignUp';
import SignIn from './Components/Utils/SignIn';
import Navigation from './Components/Utils/Navigation';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const [showCreator, setShowCreator] = useState(false);
  const [showNPCGenerator, setShowNPCGenerator] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleOpenCharacterCreator = () => setShowCreator(true);
  const handleCloseCharacterCreator = () => setShowCreator(false);

  const handleOpenNPCGenerator = () => setShowNPCGenerator(true);
  const handleCloseNPCGenerator = () => setShowNPCGenerator(false);

  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleOpenSignIn = () => setShowSignIn(true);
  const handleCloseSignIn = () => setShowSignIn(false);

  const handleSignUpSuccess = () => {
    setShowSuccessAlert(true);
    handleCloseSignUp();
  };

  return (
    <CharacterCreationProvider>
      <Router>
        <Navigation
          onOpenCharacterCreator={handleOpenCharacterCreator}
          onOpenNPCGenerator={handleOpenNPCGenerator}
          onOpenSignUp={handleOpenSignUp}
          onOpenSignIn={handleOpenSignIn}
        />
        <Routes>
          <Route path="/" element={
            <Container className="my-5">
              <h4>WEBSITE CURRENTLY UNDER CONSTRUCTION</h4>
              <h1>Welcome to the Savage Worlds Character Creator!</h1>
              <Button variant="primary" onClick={handleOpenCharacterCreator}>Start Creating Your Character</Button>
            </Container>
          } />
          <Route path="/compendium/edges" element={<Compendium type="edges" />} />
          <Route path="/compendium/hindrances" element={<Compendium type="hindrances" />} />
          <Route path="/compendium/gear" element={<Compendium type="gear" />} /> {/* Adjust according to what you need */}
          {/* Add other routes as needed */}
        </Routes>

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
            <SignIn onCloseModal={handleCloseSignIn} />
          </Modal.Body>
        </Modal>

        {showSuccessAlert && (
          <div 
            className="alert alert-success alert-dismissible fade show" 
            role="alert" 
            style={{ position: 'fixed', width: '100%', top: '0px', zIndex: '1051' }}
          >
            You have signed up successfully!
            <button type="button" className="btn-close" onClick={() => setShowSuccessAlert(false)} aria-label="Close"></button>
          </div>
        )}
      </Router>
    </CharacterCreationProvider>
  );
};

export default App;
