import React from 'react';
import Select from 'react-select';
import { Form, Modal } from 'react-bootstrap';
import { gearOptions, moneyOptions } from '../../../../Constants/CharacterOptions';

export const StepFourGear = ({ characterData, handleInputChange }) => {
  // Helper function to format Select options
  const formatOptions = options => options.map(option => ({
    value: option.id,
    label: `${option.name}: ${option.description}`,
  }));

  // Preparing formatted options for each category
  const weaponOptions = formatOptions(gearOptions.weapons);
  const armorOptions = formatOptions(gearOptions.armor);
  const itemOptions = formatOptions(gearOptions.items);

  // Handling changes for each category
  const handleSelectionChange = (selectedOptions, category) => {
    const selectedIds = selectedOptions ? selectedOptions.map(option => option.value) : [];
    handleInputChange({
      target: {
        name: `gear.${category}`,
        value: selectedIds,
      },
    });
  };

  // Prepare initial values for each category based on characterData
  const initialValues = {
    weapons: weaponOptions.filter(option => characterData.gear?.weapons?.includes(option.value)),
    armor: armorOptions.filter(option => characterData.gear?.armor?.includes(option.value)),
    items: itemOptions.filter(option => characterData.gear?.items?.includes(option.value)),
  };

  return (
    <Modal.Body>
      <Form>
        {/* Weapons Select */}
        <Form.Group>
          <Form.Label>Select Your Weapons</Form.Label>
          <Select
            isMulti
            options={weaponOptions}
            onChange={(selectedOptions) => handleSelectionChange(selectedOptions, 'weapons')}
            value={initialValues.weapons}
            classNamePrefix="select"
            placeholder="Select weapons..."
          />
        </Form.Group>

        {/* Armor Select */}
        <Form.Group>
          <Form.Label>Select Your Armor</Form.Label>
          <Select
            isMulti
            options={armorOptions}
            onChange={(selectedOptions) => handleSelectionChange(selectedOptions, 'armor')}
            value={initialValues.armor}
            classNamePrefix="select"
            placeholder="Select armor..."
          />
        </Form.Group>

        {/* Items Select */}
        <Form.Group>
          <Form.Label>Select Your Items</Form.Label>
          <Select
            isMulti
            options={itemOptions}
            onChange={(selectedOptions) => handleSelectionChange(selectedOptions, 'items')}
            value={initialValues.items}
            classNamePrefix="select"
            placeholder="Select items..."
          />
        </Form.Group>

        {/* Money Select */}
        <Form.Group>
          <Form.Label>Select Your Starting Money</Form.Label>
          <Form.Control
            as="select"
            name="money"
            value={characterData.money}
            onChange={handleInputChange}
          >
            {moneyOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}: {option.amount}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Modal.Body>
  );
};
