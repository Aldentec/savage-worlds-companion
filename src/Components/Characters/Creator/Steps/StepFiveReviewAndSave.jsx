import React from 'react';
import { ListGroup, Modal } from 'react-bootstrap';
import { races, edges, hindrances, gearOptions, moneyOptions } from '../../../../Constants/CharacterOptions';

export const StepFiveReviewAndSave = ({ characterData }) => {

  const displayGearByCategory = (gearIds, category) => {
    return gearIds.map(gearId => {
      const gear = gearOptions[category].find(option => option.id === gearId);
      return gear ? `${gear.name}: ${gear.description}` : 'Unknown';
    });
  };

  const findNameById = (id, options) => options.find(option => option.id === id)?.name;
  const findDescriptionById = (id, options) => options.find(option => option.id === id)?.description;
  const findAmountById = (id, options) => options.find(option => option.id === id)?.amount;

  return (
    <Modal.Body>
      <ListGroup>
        <ListGroup.Item><strong>Name:</strong> {characterData.name}</ListGroup.Item>
        <ListGroup.Item><strong>Race:</strong> {findNameById(characterData.race, races)}</ListGroup.Item>
        <ListGroup.Item>
          <strong>Attributes:</strong>
          <ul>
            {Object.entries(characterData.attributes || {}).map(([key, value]) => (
              <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Edges:</strong>
          <ul>
            {characterData.edges?.map(edgeId => (
              <li key={edgeId}>{findNameById(edgeId, edges)}: {findDescriptionById(edgeId, edges)}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Hindrances:</strong>
          <ul>
            {characterData.hindrances?.map(hindranceId => (
              <li key={hindranceId}>{findNameById(hindranceId, hindrances)}: {findDescriptionById(hindranceId, hindrances)}</li>
            ))}
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Starting Gear:</strong>
          {['weapons', 'armor', 'items'].map(category => (
            <div key={category}>
              <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
              <ul>
                {characterData.gear[category]?.length > 0
                  ? displayGearByCategory(characterData.gear[category], category).map((gear, index) => (
                      <li key={index}>{gear}</li>
                    ))
                  : 'None selected'}
              </ul>
            </div>
          ))}
        </ListGroup.Item>

        <ListGroup.Item>
          <strong>Starting Money:</strong> {findAmountById(characterData.money, moneyOptions)}
        </ListGroup.Item>
      </ListGroup>
    </Modal.Body>
  );
};
