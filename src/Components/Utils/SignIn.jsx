import React, { useState } from 'react';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const SignIn = ({ onCloseModal, onSignInSuccess }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(''); // Clear any existing error message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cognito = new CognitoIdentityServiceProvider({ region: 'us-west-2' });
    const signInParams = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: '6uup6k5t520f3faqev7usog5di', // Replace with your Cognito App Client ID
      AuthParameters: {
        USERNAME: formData.username,
        PASSWORD: formData.password,
      },
    };

    try {
      const signInResponse = await cognito.initiateAuth(signInParams).promise();
      console.log('Sign In successful', signInResponse);
      // Optionally, store the tokens in local storage or your app's state
      localStorage.setItem('username', formData.username);
      localStorage.setItem('idToken', signInResponse.AuthenticationResult.IdToken);
      localStorage.setItem('accessToken', signInResponse.AuthenticationResult.AccessToken);
      // Trigger any post-sign-in actions
      if (onSignInSuccess) onSignInSuccess();
      onCloseModal();
    } catch (error) {
      console.error('Sign-in error:', error);
      setErrorMessage('Failed to sign in. Please check your username and password.');
    }
  };

  return (
    <Container>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="usernameInput">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="passwordInput">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
