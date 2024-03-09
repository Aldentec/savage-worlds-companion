import faker from 'faker';
import { 
  races, 
  edges,
  hindrances, 
  skills, 
  gearOptions, 
  bossGearOptions,
  legendaryGearOptions,
  moneyOptions,
  personalityTraits,
  powers // assuming you have imported the powers from somewhere
} from '../../../../Constants/CharacterOptions';

const generateRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateAttributes = (diceOptions) => {
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
    
    // Ensure at least one of each dice is included
    for (const dice of diceOptions) {
        if (!uniqueDice.has(dice)) {
            attributes[getRandomAttribute(attributes)] = dice;
        }
    }
  
    return attributes;
};

// Function to get a random attribute from the attributes object
const getRandomAttribute = (attributes) => {
    const keys = Object.keys(attributes);
    return keys[Math.floor(Math.random() * keys.length)];
};

const generateSkills = (diceOptions) => {
    const defaultSkills = skills.map(skill => {
      const diceType = generateRandomValue(diceOptions);
      
      return {
        [skill.id]: diceType
      };
    }).reduce((acc, cur) => ({ ...acc, ...cur }), {});
    return defaultSkills;
};

const generateEdges = (edgeOptions) => {
  const numEdges = Math.floor(Math.random() * 3);
  const selectedEdges = [];
  for (let i = 0; i < numEdges; i++) {
    const edge = generateRandomValue(edgeOptions);
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

const generateGear = (gearOptions) => {
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

const generateHeight = () => {
  // Generate height in inches (between 4'6" and 6'6")
  const feet = Math.floor(Math.random() * 3) + 4; // Random number between 4 and 6
  const inches = Math.floor(Math.random() * 12); // Random number between 0 and 11
  return `${feet}'${inches}"`;
};

const generateWeight = () => {
  // Generate weight in pounds (between 100 lbs and 300 lbs)
  return Math.floor(Math.random() * 201) + 100; // Random number between 100 and 300
};

const generateName = () => {
  return faker.name.firstName(); // Generates a random full name
};

export const generateNPC = (npcType) => {
  return new Promise((resolve, reject) => {
    let npc = {
      name: generateName(),
      race: generateRandomValue(races),
      attributes: {},
      skills: {},
      edges: [],
      hindrances: [],
      gear: {},
      money: {},
      personalityTraits: '',
      height: '',
      weight: 0,
      powers: [],
      pace: 6, // Default Pace value for most characters
      parry: 2, // Base Parry value, will be updated if Fighting skill exists
      toughness: 2 // Base Toughness value, will be updated based on Vigor
    };

    if (npcType !== 'Default') {
      const power = generateRandomValue(powers);
      npc.powers.push(power);
    }

    switch(npcType) {
      case 'Default':
        npc.attributes = generateAttributes(["d4", "d6", "d8"]);
        npc.skills = generateSkills(["d4", "d6"]);
        npc.edges = generateEdges(edges);
        npc.hindrances = generateHindrances();
        npc.gear = generateGear(gearOptions);
        npc.money = generateMoney();
        npc.personalityTraits = generatePersonalityTraits();
        npc.height = generateHeight();
        npc.weight = generateWeight();
        break;
      case 'Boss':
        npc.attributes = generateAttributes(["d4", "d6", "d8", "d10"]);
        npc.skills = generateSkills(["d6", "d8"]);
        npc.edges = generateEdges(edges);
        npc.hindrances = generateHindrances();
        npc.gear = generateGear(bossGearOptions);
        npc.money = generateMoney();
        npc.personalityTraits = generatePersonalityTraits();
        npc.height = generateHeight();
        npc.weight = generateWeight();
        npc.isBoss = true;
        break;
      case 'Legendary':
        npc.attributes = generateAttributes(["d6", "d8", "d10", "d12"]);
        npc.skills = generateSkills(["d8", "d10", "d12"]);
        npc.edges = generateEdges(edges);
        npc.hindrances = generateHindrances();
        npc.gear = generateGear(legendaryGearOptions);
        npc.money = generateMoney();
        npc.personalityTraits = generatePersonalityTraits();
        npc.height = generateHeight();
        npc.weight = generateWeight();
        npc.isLegendary = true;
        break;
      default:
        reject(new Error('Invalid NPC type'));
    }

    // Ensure at least one edge is generated
    if (npc.edges.length === 0) {
      npc.edges.push(generateRandomValue(edges));
    }

    // Ensure at least one hindrance is generated
    if (npc.hindrances.length === 0) {
      npc.hindrances.push(generateRandomValue(hindrances));
    }

    // Calculate Parry based on Fighting skill
    if (npc.skills.fighting) {
      const fightingDie = parseInt(npc.skills.fighting.substring(1)); // Extracts the numeric part of the die type (e.g., "d6" becomes 6)
      npc.parry = 2 + Math.floor(fightingDie / 2);
    }

    // Calculate Toughness based on Vigor
    if (npc.attributes.vigor) {
      const vigorDie = parseInt(npc.attributes.vigor.substring(1)); // Extracts the numeric part of the die type
      npc.toughness = 2 + Math.floor(vigorDie / 2);

      // Add armor bonuses to Toughness, assuming your gear data includes a way to define these
      npc.gear.armor.forEach(armor => {
        // Here, we assume each piece of armor in the array has a `toughnessBonus` attribute.
        // Adjust according to your actual data structure.
        npc.toughness += armor.toughnessBonus || 0;
      });
    }


    resolve(npc);
  });
};
