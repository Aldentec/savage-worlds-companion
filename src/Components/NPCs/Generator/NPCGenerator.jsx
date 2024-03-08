import React, { useState } from 'react';
import { Form, DropdownButton, Dropdown } from 'react-bootstrap';
import generateDefaultNPC from './Scripts/GenerateDefaultNPC';
import generateBossNPC from './Scripts/GenerateBossNPC';
import generateLegendaryNPC from './Scripts/GenerateLegendaryNPC';
import GeneratedNPCDetails from './GeneratedNPCDetails';

export const NPCGenerator = () => {
  const [npcData, setNPCData] = useState(null);
  const [bossNPCData, setBossNPCData] = useState(null);
  const [legendaryNPCData, setLegendaryNPCData] = useState(null);
  const [selectedNPCType, setSelectedNPCType] = useState(null);

  const handleNPCGeneration = (npcType) => {
    // Logic to generate NPC based on selected type
    if (npcType === 'default') {
      generateDefaultNPC().then((generatedNPC) => { setNPCData(generatedNPC); setSelectedNPCType('default'); });
    } else if (npcType === 'boss') {
      generateBossNPC().then((generatedBossNPC) => { setBossNPCData(generatedBossNPC); setSelectedNPCType('boss'); });
    } else if (npcType === 'legendary') {
      generateLegendaryNPC().then((generatedLegendaryNPC) => { setLegendaryNPCData(generatedLegendaryNPC); setSelectedNPCType('legendary'); });
    }
  };

  return (
    <div>
      <h2>NPC Generator</h2>
      <Form>
        <DropdownButton id="npc-type-dropdown" title="Select NPC Type">
          <Dropdown.Item onClick={() => handleNPCGeneration('default')}>Default NPC</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNPCGeneration('boss')}>Boss NPC</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNPCGeneration('legendary')}>Legendary NPC</Dropdown.Item>
        </DropdownButton>
        <br />
        {/* <Button variant="success" onClick={saveNPC}>Save NPC</Button> */}
      </Form>
      {selectedNPCType === 'default' && npcData && <GeneratedNPCDetails npcData={npcData} />}
      {selectedNPCType === 'boss' && bossNPCData && <GeneratedNPCDetails npcData={bossNPCData} />}
      {selectedNPCType === 'legendary' && legendaryNPCData && <GeneratedNPCDetails npcData={legendaryNPCData} />}
    </div>
  );
};
