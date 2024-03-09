import React, { useState } from 'react';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const SignUpPage = ({ onSignUpSuccess, onCloseModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    phone_number: '',
  });
  const [verificationSent, setVerificationSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const cognito = new CognitoIdentityServiceProvider({ region: 'us-west-2' });

    try {
      const signUpParams = {
        ClientId: '6uup6k5t520f3faqev7usog5di',
        Username: formData.username,
        Password: formData.password,
        UserAttributes: [
          {
            Name: 'email',
            Value: formData.email,
          },
          {
            Name: 'name',
            Value: formData.name,
          },
          {
            Name: 'phone_number',
            Value: formData.phone_number,
          },
        ],
      };

      // Here we trigger the actual cognito signup
      await cognito.signUp(signUpParams).promise();
      console.log('User signed up successfully');

      // Attempt to sign the user in automatically after successful sign-up
      const signInParams = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: signUpParams.ClientId,
        AuthParameters: {
          USERNAME: formData.username,
          PASSWORD: formData.password,
        },
      };

      const signInResponse = await cognito.initiateAuth(signInParams).promise();
      console.log('User signed in successfully', signInResponse);

      // Storing the username in localstorage for easy use in other code
      localStorage.setItem('username', formData.username);

      // Call the onSignUpSuccess callback function when sign up is successful.
      // When this occurs, we trigger a lambda from a cognito pre-signup trigger to automatically verify user email
      // Eventually this should be changed to make the user actually verify their email
      onSignUpSuccess();
      onCloseModal();
    } catch (error) {
      console.error('Sign-up or sign-in error:', error);
      if (error.code === 'UsernameExistsException') {
        setErrorMessage('This username already exists. Please try another one.');
      } else {
        setErrorMessage('An error occurred during the sign-up process. Please try again.');
      }
    }
  };

  const handleResendVerification = async () => {
    console.log('Resending verification email...');
    setVerificationSent(true);
  };

  return (
    <Container>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {verificationSent ? (
        <Alert variant="success">
          Verification email sent. Please check your email to confirm your account.
          <Button variant="link" onClick={handleResendVerification}>Resend Verification</Button>
        </Alert>
      ) : (
        <Form onSubmit={handleSignUp}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="emailer@website.com" value={formData.email} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Joe Dohn" value={formData.name} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" name="phone_number" placeholder="+15551234456" value={formData.phone_number} onChange={handleInputChange} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
      )}
    </Container>
  );
};

export default SignUpPage;
