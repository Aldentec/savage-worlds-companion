import React, {useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import { EdgesHindrancesSelect } from '../EdgesHindrancesSelect';
import { edges, hindrances } from '../../../../Constants/CharacterOptions';

export const StepThreeEdgesHindrances = ({ characterData, handleInputChange, setIsValid  }) => {

  useEffect(() => {
    // Check if both edges and hindrances have at least one selection
    const isValid = (characterData.edges?.length > 0) && (characterData.hindrances?.length > 0);
    setIsValid(isValid); // Notify the CreationWizard of the validation state
  }, [characterData.edges, characterData.hindrances, setIsValid]);

  // Handle changes for edges and hindrances using the custom Select component
  const handleChange = (type, selectedIds) => {
    // Simulate an event object for the handleInputChange function
    handleInputChange({
      target: {
        name: type, // "edges" or "hindrances"
        value: selectedIds, // Array of selected IDs
      },
    });
  };

  return (
    <Modal.Body>
     <div className="row mb-3">
      <div className="col">
        <h4> Edges 
          <span style={{ color: 'red' }}>*</span>
        </h4>
        <EdgesHindrancesSelect
          options={edges}
          value={characterData.edges || []}
          onChange={(selectedIds) => handleChange('edges', selectedIds)}
          placeholder="Select Edges..."
        />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h4> Hindrances 
          <span style={{ color: 'red' }}>*</span> 
        </h4>
        <EdgesHindrancesSelect
          options={hindrances}
          value={characterData.hindrances || []}
          onChange={(selectedIds) => handleChange('hindrances', selectedIds)}
          placeholder="Select Hindrances..."
        />
      </div>
    </div>

    </Modal.Body>
  );
};
