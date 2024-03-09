import React, { useState } from 'react';
import { Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { generateNPC } from './Scripts/GenerateNPC';
import GeneratedNPCDetails from './GeneratedNPCDetails';
import saveNPCToDynamoDB from '../../../Scripts/DynamoDB';

const NPCGenerator = () => {
  const [npcData, setNPCData] = useState(null);
  const [bossNPCData, setBossNPCData] = useState(null);
  const [legendaryNPCData, setLegendaryNPCData] = useState(null);
  const [selectedNPCType, setSelectedNPCType] = useState(null);

  const handleNPCGeneration = (npcType) => {
    generateNPC(npcType)
      .then((generatedNPC) => {
        switch (npcType) {
          case 'Default':
            setNPCData(generatedNPC);
            break;
          case 'Boss':
            setBossNPCData(generatedNPC);
            break;
          case 'Legendary':
            setLegendaryNPCData(generatedNPC);
            break;
          default:
            break;
        }
        setSelectedNPCType(npcType);
      })
      .catch((error) => console.error(error));
  };

  const saveNPC = () => {
    let npcToSave = null;
    switch (selectedNPCType) {
      case 'Default':
        npcToSave = formatNPCData(npcData);
        break;
      case 'Boss':
        npcToSave = formatNPCData(bossNPCData);
        break;
      case 'Legendary':
        npcToSave = formatNPCData(legendaryNPCData);
        break;
      default:
        break;
    }
    // Call the function to save NPC to DynamoDB
    saveNPCToDynamoDB(npcToSave)
      .then(() => console.log('NPC saved successfully'))
      .catch((error) => console.error('Error saving NPC:', error));
  };
  
  const formatNPCData = (npcData) => {
    const formattedNPCData = { ...npcData };
  
    // Ensure race is formatted as a string
    formattedNPCData.race = String(formattedNPCData.race);
  
    // Format attributes
    const formattedAttributes = {};
    for (const attributeId in npcData.attributes) {
      formattedAttributes[attributeId] = npcData.attributes[attributeId].value;
    }
  
    // Format skills
    const formattedSkills = {};
    for (const skillId in npcData.skills) {
      formattedSkills[skillId] = npcData.skills[skillId].value;
    }
  
    formattedNPCData.attributes = formattedAttributes;
    formattedNPCData.skills = formattedSkills;
  
    return formattedNPCData;
  };
  
  
  return (
    <div>
      <Form>
        <DropdownButton id="npc-type-dropdown" title="Select NPC Type">
          <Dropdown.Item onClick={() => handleNPCGeneration('Default')}>Default NPC</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNPCGeneration('Boss')}>Boss NPC</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNPCGeneration('Legendary')}>Legendary NPC</Dropdown.Item>
        </DropdownButton>
        <br />
        <Button variant="success" onClick={saveNPC}>Save NPC</Button> {/* Add the save button */}
      </Form>
      {selectedNPCType === 'Default' && npcData && <GeneratedNPCDetails npcData={npcData} />}
      {selectedNPCType === 'Boss' && bossNPCData && <GeneratedNPCDetails npcData={bossNPCData} />}
      {selectedNPCType === 'Legendary' && legendaryNPCData && <GeneratedNPCDetails npcData={legendaryNPCData} />}
    </div>
  );
};

export default NPCGenerator;
