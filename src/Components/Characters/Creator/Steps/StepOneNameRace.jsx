import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { races } from '../../../../Constants/CharacterOptions';

export const StepOneNameRace = ({ characterData, handleInputChange }) => {
  const [localState, setLocalState] = useState({
    name: '',
    race: '',
  });

  useEffect(() => {
    setLocalState({
      name: characterData.name || '',
      race: characterData.race || '',
    });
  }, [characterData]);

  return (
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>
            Character Name <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={localState.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Race <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control
            as="select"
            name="race"
            value={localState.race}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a race</option>
            {races.map(race => (
              <option key={race.id} value={race.id}>{race.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Modal.Body>
  );
};
