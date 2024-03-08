import React, { useState } from 'react';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { Container, Form, Button } from 'react-bootstrap';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone_number: '',
  });
  const [verificationSent, setVerificationSent] = useState(false); // State to track verification email sent

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const cognito = new CognitoIdentityServiceProvider({ region: 'us-west-2' });

    try {
      const params = {
        ClientId: '6uup6k5t520f3faqev7usog5di',
        Username: formData.username, // Using email as the username
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
          // Add additional user attributes as needed
        ],
      };

      await cognito.signUp(params).promise();
      console.log('User signed up successfully');
      // Redirect or display success message
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle sign-up error and display error message
    }
  };

  const handleResendVerification = async () => {
    // Code to resend verification email
    console.log('Resending verification email...');
    setVerificationSent(true);
  };

  return (
    <Container>
      {verificationSent ? (
        <div className="alert alert-success" role="alert">
          Verification email sent. Please check your email to confirm your account.
          <Button variant="link" onClick={handleResendVerification}>Resend Verification</Button>
        </div>
      ) : (
        <div>
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
              <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phone_number" placeholder="Enter phone number" value={formData.phone_number} onChange={handleInputChange} />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default SignUpPage;
