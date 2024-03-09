import React, { useState } from 'react';
import { Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { generateNPC } from './Scripts/GenerateNPC';
import GeneratedNPCDetails from './GeneratedNPCDetails';

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
  

  return (
    <div>
      <Form>
        <DropdownButton id="npc-type-dropdown" title="Select NPC Type">
          <Dropdown.Item onClick={() => handleNPCGeneration('Default')}>Default NPC</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNPCGeneration('Boss')}>Boss NPC</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNPCGeneration('Legendary')}>Legendary NPC</Dropdown.Item>
        </DropdownButton>
        <br />
        {/* <Button variant="success" onClick={saveNPC}>Save NPC</Button> */}
      </Form>
      {selectedNPCType === 'Default' && npcData && <GeneratedNPCDetails npcData={npcData} />}
      {selectedNPCType === 'Boss' && bossNPCData && <GeneratedNPCDetails npcData={bossNPCData} />}
      {selectedNPCType === 'Legendary' && legendaryNPCData && <GeneratedNPCDetails npcData={legendaryNPCData} />}
    </div>
  );
};

export default NPCGenerator;