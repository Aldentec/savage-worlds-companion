import faker from 'faker';
import { 
  races, 
  edges,
  hindrances, 
  skills, 
  gearOptions, 
  moneyOptions,
  personalityTraits
} from '../../../../Constants/CharacterOptions';

const generateRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateAttributes = () => {
  const attributes = {
    agility: generateRandomValue(["d4", "d6", "d8"]),
    smarts: generateRandomValue(["d4", "d6", "d8"]),
    spirit: generateRandomValue(["d4", "d6", "d8"]),
    strength: generateRandomValue(["d4", "d6", "d8"]),
    vigor: generateRandomValue(["d4", "d6", "d8"]),
  };
  return attributes;
};

const generateSkills = () => {
  const defaultSkills = skills.map(skill => ({
    [skill.id]: Math.floor(Math.random() * 3) + 2, // Generate skill level from d4 to d6
  })).reduce((acc, cur) => ({ ...acc, ...cur }), {});
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
  const selectedWeapons = [generateRandomValue(gearOptions.weapons)];
  const selectedArmor = [generateRandomValue(gearOptions.armor)];
  const selectedItems = [generateRandomValue(gearOptions.items)];
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

const generateDefaultNPC = () => {
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

export default generateDefaultNPC;
