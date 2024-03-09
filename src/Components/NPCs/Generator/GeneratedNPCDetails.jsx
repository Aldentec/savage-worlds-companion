import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

// Import the skills array
import { skills } from '../../../Constants/CharacterOptions';

const GeneratedNPCDetails = ({ npcData }) => {
  const [forceUpdate, setForceUpdate] = useState(false);

  const determineNPCType = () => {
    if (npcData.isBoss) {
      return 'Boss';
    } else if (npcData.isLegendary) {
      return 'Legendary';
    } else {
      return 'Default';
    }
  };

  const triggerUpdate = () => {
    setForceUpdate(prevState => !prevState);
  };

  useEffect(() => {
    triggerUpdate();
  }, [npcData && JSON.stringify(npcData)]);

  return (
    <div className="savage-worlds-character-sheet">
      <h2 className="text-center">Savage Worlds Character Sheet</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <strong>Name:</strong> {npcData.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>NPC Type:</strong> {determineNPCType()}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Race:</strong> {npcData.race.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Height:</strong> {npcData.height}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Weight:</strong> {npcData.weight} lbs
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Pace:</strong> {npcData.pace}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Parry:</strong> {npcData.parry}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Toughness:</strong> {npcData.toughness}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Money:</strong> {npcData.money.amount}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <strong>Attributes:</strong>
              <ul>
                {Object.entries(npcData.attributes || {}).map(([key, value]) => (
                  <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Skills:</strong>
              <ul>
                {Object.entries(npcData.skills || {}).map(([skillId, value]) => (
                  <li key={skillId}>{skills.find(skill => skill.id === skillId)?.name}: {value}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Edges:</strong>
              <ul>
                {npcData.edges?.map((edge, index) => (
                  <li key={`${edge.id}-${index}`}>{edge.name}: {edge.description}</li>
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
                <div key={category}>
                  <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
                  <ul>
                    {gear.map(item => (
                      <li key={item.id}>{item.name}: {item.description}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Personality Traits:</strong> {npcData.personalityTraits}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Powers:</strong>
              <ul>
                {npcData.powers?.map((power, index) => (
                  <li key={index}>{power.name}: {power.description}</li>
                ))}
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default GeneratedNPCDetails;
