import React from 'react';
import { ListGroup } from 'react-bootstrap';

const GeneratedNPCDetails = ({ npcData }) => {
  const findNameById = (id, options) => options.find(option => option.id === id)?.name;
  const findDescriptionById = (id, options) => options.find(option => option.id === id)?.description;

  const displayGearByCategory = (gear, category) => {
    return (
      <div key={category}>
        <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
        <ul>
          {gear?.map(item => (
            <li key={item.id}>{item.name}: {item.description}</li>
          ))}
        </ul>
      </div>
    );
  };

  const determineNPCType = () => {
    if (npcData.isBoss) {
      return 'Boss';
    } else if (npcData.isLegendary) {
      return 'Legendary';
    } else {
      return 'Default';
    }
  };

  return (
    <ListGroup>
      <ListGroup.Item>
        <strong>NPC Type:</strong> {determineNPCType()}
      </ListGroup.Item>
      <ListGroup.Item><strong>Name:</strong> {npcData.name}</ListGroup.Item>
      <ListGroup.Item><strong>Race:</strong> {npcData.race.name}</ListGroup.Item>
      <ListGroup.Item>
        <strong>Attributes:</strong>
        <ul>
          {Object.entries(npcData.attributes || {}).map(([key, value]) => (
            <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li>
          ))}
        </ul>
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Skills:</strong> {/* Displaying skills here */}
        <ul>
          {Object.entries(npcData.skills || {}).map(([skill, value]) => (
            <li key={skill}>{skill}: {value}</li>
          ))}
        </ul>
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Edges:</strong>
        <ul>
          {npcData.edges?.map(edge => (
            <li key={edge.id}>{edge.name}: {edge.description}</li>
          ))}
        </ul>
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Hindrances:</strong>
        <ul>
          {npcData.hindrances?.map(hindrance => (
            <li key={hindrance.id}>{hindrance.name}: {hindrance.description}</li>
          ))}
        </ul>
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Gear:</strong>
        {Object.entries(npcData.gear || {}).map(([category, gear]) => (
          displayGearByCategory(gear, category)
        ))}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Money:</strong> {npcData.money.amount}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Personality Traits:</strong> {npcData.personalityTraits}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default GeneratedNPCDetails;
