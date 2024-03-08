import React from 'react';
import { Form, Modal } from 'react-bootstrap';

const diceOptions = [
  <option key="d4" value="d4">d4</option>,
  <option key="d6" value="d6">d6</option>,
  <option key="d8" value="d8">d8</option>,
  <option key="d10" value="d10">d10</option>,
  <option key="d12" value="d12">d12</option>,
];

export const StepTwoAttributes = ({ characterData, handleInputChange }) => {
  const { agility, smarts, spirit, strength, vigor } = characterData.attributes;

  return (
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Agility</Form.Label>
          <Form.Control
            as="select"
            name="attributes.agility"
            value={agility}
            onChange={handleInputChange}
          >
            {diceOptions}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Smarts</Form.Label>
          <Form.Control
            as="select"
            name="attributes.smarts"
            value={smarts}
            onChange={handleInputChange}
          >
            {diceOptions}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Spirit</Form.Label>
          <Form.Control
            as="select"
            name="attributes.spirit"
            value={spirit}
            onChange={handleInputChange}
          >
            {diceOptions}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Strength</Form.Label>
          <Form.Control
            as="select"
            name="attributes.strength"
            value={strength}
            onChange={handleInputChange}
          >
            {diceOptions}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Vigor</Form.Label>
          <Form.Control
            as="select"
            name="attributes.vigor"
            value={vigor}
            onChange={handleInputChange}
          >
            {diceOptions}
          </Form.Control>
        </Form.Group>
      </Form>
    </Modal.Body>
  );
};
