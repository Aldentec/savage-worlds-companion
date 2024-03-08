import faker from 'faker';
import { 
  races, 
  edges,
  hindrances, 
  skills, 
  legendaryGearOptions, 
  moneyOptions,
  personalityTraits
} from '../../../../Constants/CharacterOptions';

const MAX_DICE_VALUES = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12
  };
  
const rollDice = (sides) => Math.floor(Math.random() * sides) + 1;

const generateRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateAttributes = () => {
    const diceOptions = ["d4", "d6", "d8", "d10", "d12"];
    const attributes = {
        agility: "",
        smarts: "",
        spirit: "",
        strength: "",
        vigor: ""
    };
    const uniqueDice = new Set(); // Use a Set to ensure uniqueness
    
    // Generate random dice values for each attribute
    Object.keys(attributes).forEach(attribute => {
        attributes[attribute] = generateRandomValue(diceOptions);
        uniqueDice.add(attributes[attribute]);
    });
    
    // Ensure at least one d4, d6, d8, and d10 are included
    if (!uniqueDice.has("d6")) attributes[getRandomAttribute(attributes)] = "d6";
    if (!uniqueDice.has("d8")) attributes[getRandomAttribute(attributes)] = "d8";
    if (!uniqueDice.has("d10")) attributes[getRandomAttribute(attributes)] = "d10";
    if (!uniqueDice.has("d12")) attributes[getRandomAttribute(attributes)] = "d12";
  
    return attributes;
};

// Function to get a random attribute from the attributes object
const getRandomAttribute = (attributes) => {
    const keys = Object.keys(attributes);
    return keys[Math.floor(Math.random() * keys.length)];
};

const generateSkills = () => {
    const defaultSkills = skills.map(skill => {
      // Ensure that diceType is within the valid range
      const diceTypeIndex = Math.floor(Math.random() * 5); // 0, 1, 2, 3, or 4
      const diceTypeOptions = ["d4", "d6", "d8", "d10", "d12"];
      const diceType = diceTypeOptions[diceTypeIndex];
      
      return {
        [skill.id]: diceType
      };
    }).reduce((acc, cur) => ({ ...acc, ...cur }), {});
    return defaultSkills;
};



const generateEdges = () => {
  const numEdges = Math.floor(Math.random() * 3);
  const selectedEdges = [];
  for (let i = 0; i < numEdges; i++) {
    const edge = generateRandomValue(edges);
    selectedEdges.push(edge);
  }
  return selectedEdges;
};

const generateHindrances = () => {
  const numHindrances = Math.floor(Math.random() * 3);
  const selectedHindrances = [];
  for (let i = 0; i < numHindrances; i++) {
    const hindrance = generateRandomValue(hindrances);
    selectedHindrances.push(hindrance);
  }
  return selectedHindrances;
};

const generateGear = () => {
  const selectedWeapons = [generateRandomValue(legendaryGearOptions.weapons)];
  const selectedArmor = [generateRandomValue(legendaryGearOptions.armor)];
  const selectedItems = [generateRandomValue(legendaryGearOptions.items)];
  return {
    weapons: selectedWeapons,
    armor: selectedArmor,
    items: selectedItems,
  };
};

const generateMoney = () => {
  return generateRandomValue(moneyOptions);
};

const generatePersonalityTraits = () => {
  return generateRandomValue(personalityTraits).name;
};

const generateName = () => {
  return faker.name.firstName(); // Generates a random full name
};

const generateLegendaryNPC = () => {
  return new Promise((resolve, reject) => {
    const npc = {
      name: generateName(),
      race: generateRandomValue(races),
      attributes: generateAttributes(),
      skills: generateSkills(),
      edges: generateEdges(),
      hindrances: generateHindrances(),
      gear: generateGear(),
      money: generateMoney(),
      personalityTraits: generatePersonalityTraits(),
      isLegendary: true,
    };

    // Ensure at least one edge is generated
    if (npc.edges.length === 0) {
      npc.edges.push(generateRandomValue(edges));
    }

    // Ensure at least one hindrance is generated
    if (npc.hindrances.length === 0) {
      npc.hindrances.push(generateRandomValue(hindrances));
    }

    resolve(npc);
  });
};

export default generateLegendaryNPC;
