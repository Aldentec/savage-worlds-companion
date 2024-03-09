export const races = [
  { id: "human", name: "Human" },
  { id: "elf", name: "Elf" },
  { id: "dwarf", name: "Dwarf" },
  { id: "orc", name: "Orc" },
  { id: "halfling", name: "Halfling" },
  { id: "goblin", name: "Goblin" },
  { id: "trollkin", name: "Trollkin" },
  { id: "saurian", name: "Saurian", description: "Reptilian humanoids with ancient culture" },
  { id: "kith", name: "Kith", description: "Plant-like humanoids, masters of herbal lore" },
  { id: "naiad", name: "Naiad", description: "Aquatic beings, adept in water magic" },
  { id: "centaur", name: "Centaur", description: "Half-human, half-horse creatures, known for speed and endurance" },
  { id: "pixie", name: "Pixie", description: "Tiny winged folk, skilled in illusion and mischief" },
];

export const edges = [
  { id: "alertness", name: "Alertness", description: "+2 Notice" },
  { id: "ambidextrous", name: "Ambidextrous", description: "Ignore -2 penalty for off-hand" },
  { id: "arcaneResistance", name: "Arcane Resistance", description: "-2 to be affected by powers, +2 to resist" },
  { id: "brawny", name: "Brawny", description: "+1 Toughness, load limit is 8x Str" },
  { id: "quick", name: "Quick", description: "Redraw initiative cards of 5 or lower" },
  { id: "fleetFooted", name: "Fleet-Footed", description: "+2 Pace and d10 running die" },
  { id: "hardy", name: "Hardy", description: "The character does not suffer a wound from being Shaken twice" },
  { id: "marksman", name: "Marksman", description: "Aim action bonus (+2 Shooting) if character does not move" },
  { id: "rich", name: "Rich", description: "Three times starting funds and $75K annual salary" },
  { id: "rockAndRoll", name: "Rock and Roll!", description: "Ignore full-auto penalty if shooter does not move" },
];

export const hindrances = [
  { id: "allThumbs", name: "All Thumbs", description: "-2 Repair; Break devices on critical failure" },
  { id: "anemic", name: "Anemic", description: "-2 to Fatigue tests" },
  { id: "blind", name: "Blind", description: "Cannot see; -6 to all actions that rely on vision" },
  { id: "clueless", name: "Clueless", description: "-2 Common Knowledge rolls" },
  { id: "curious", name: "Curious", description: "Character wants to know about everything" },
  { id: "debt", name: "Debt", description: "Owes significant money to someone powerful" },
  { id: "elderly", name: "Elderly", description: "Physical attributes decrease but gain skill points" },
  { id: "enemy", name: "Enemy", description: "Character has a recurring nemesis" },
  { id: "greedy", name: "Greedy", description: "Character is significantly motivated by wealth" },
  { id: "pacifist", name: "Pacifist", description: "Will only fight in self-defense or to protect others" }
];

export const skills = [
  { id: "academics", name: "Academics" },
  { id: "athletics", name: "Athletics" },
  { id: "common_know", name: "Common Know" },
  { id: "driving", name: "Driving" },
  { id: "electronics", name: "Electronics" },
  { id: "fighting", name: "Fighting" },
  { id: "hacking", name: "Hacking" },
  { id: "healing", name: "Healing" },
  { id: "intimidation", name: "Intimidation" },
  { id: "language", name: "Language" },
  { id: "notice", name: "Notice" },
  { id: "occult", name: "Occult" },
  { id: "performance", name: "Performance" },
  { id: "piloting", name: "Piloting" },
  { id: "persuasion", name: "Persuasion" },
  { id: "repair", name: "Repair" },
  { id: "research", name: "Research" },
  { id: "riding", name: "Riding" },
  { id: "science", name: "Science" },
  { id: "shooting", name: "Shooting" },
  { id: "stealth", name: "Stealth" },
  { id: "survival", name: "Survival" },
  { id: "taunt", name: "Taunt" },
  { id: "thievery", name: "Thievery" },
];

export const powers = [
  { id: "fireball", name: "Fireball", description: "Launches a ball of fire towards enemies, dealing area damage." },
  { id: "telekinesis", name: "Telekinesis", description: "Moves objects with the power of the mind, allowing for manipulation from a distance." },
  { id: "invisibility", name: "Invisibility", description: "Renders the user invisible to sight, allowing for stealthy movement." },
  { id: "healing", name: "Healing", description: "Restores health and vitality to the user or allies." },
  { id: "flight", name: "Flight", description: "Grants the ability to fly through the air with ease." },
  { id: "teleportation", name: "Teleportation", description: "Instantly transports the user from one location to another." },
  { id: "shapeshifting", name: "Shapeshifting", description: "Allows the user to change their form into that of another creature." },
  { id: "mindControl", name: "Mind Control", description: "Takes control of the minds of others, bending them to the user's will." },
];

export const gearOptions = {
  weapons: [
    { id: "sword", name: "Sword", description: "A sturdy blade for close combat." },
    { id: "bow", name: "Bow", description: "A long-range weapon for skilled archers." },
    { id: "axe", name: "Battle Axe", description: "A heavy weapon capable of dealing devastating blows." },
    { id: "staff", name: "Staff", description: "A versatile weapon used by mages and monks." },
    { id: "dagger", name: "Dagger", description: "A small blade ideal for quick and stealthy attacks." },
  ],
  armor: [
    { id: "chainmail", name: "Chainmail", description: "Protective armor offering decent mobility." },
    { id: "leather", name: "Leather Armor", description: "Light armor for stealth and speed." },
    { id: "plate", name: "Plate Armor", description: "Heavy and durable armor providing maximum protection." },
    { id: "cloak", name: "Cloak", description: "A cloak for camouflage and protection against weather." },
    { id: "helmet", name: "Helmet", description: "Protective headgear to safeguard against head injuries." },
  ],
  items: [
    { id: "potion", name: "Healing Potion", description: "Heals wounds instantly." },
    { id: "torch", name: "Torch", description: "Illuminates dark areas." },
    { id: "scroll", name: "Scroll", description: "A magical scroll containing spells or enchantments." },
    { id: "rope", name: "Rope", description: "Strong and versatile rope for climbing or binding." },
    { id: "lockpick", name: "Lockpick", description: "Tools used for picking locks and disabling traps." },
  ],
};

export const bossGearOptions = {
  weapons: [
    { id: "greatsword", name: "Greatsword", description: "A massive two-handed sword for devastating strikes." },
    { id: "demonblade", name: "Demonblade", description: "An ancient blade forged from demon's bones, infused with dark power." },
    { id: "voidstaff", name: "Staff of the Void", description: "A staff that channels the power of the void, capable of unraveling reality." },
    { id: "chaosclaw", name: "Chaosclaw Gauntlets", description: "Gauntlets crackling with chaotic energy, tearing through reality with each strike." },
    { id: "doomhammer", name: "Doomhammer", description: "A massive hammer pulsating with dark energy, capable of shattering armor with ease." },
    { id: "bloodreaper", name: "Bloodreaper Scythe", description: "A scythe infused with the essence of death, draining the life force from foes." },
  ],
  armor: [
    { id: "dreadplate", name: "Dreadplate Armor", description: "Dark armor adorned with spikes, instilling fear in enemies." },
    { id: "dragonhide", name: "Dragonhide Armor", description: "Armor crafted from the scales of a powerful dragon, granting protection and resilience." },
    { id: "shadowcloak", name: "Shadowcloak", description: "A cloak woven from the shadows, granting the wearer unparalleled stealth." },
    { id: "voidveil", name: "Veil of the Void", description: "A veil that renders the wearer invisible to both sight and magical detection." },
    { id: "soulbound", name: "Soulbound Cuirass", description: "Armor fused with the souls of fallen warriors, granting unmatched resilience." },
    { id: "necroshroud", name: "Necroshroud Robes", description: "Robes woven from the fabric of death itself, granting necromantic powers." },
  ],
  items: [
    { id: "potion", name: "Healing Potion", description: "Heals wounds instantly." },
    { id: "scroll", name: "Scroll of Necromancy", description: "Summons an army of undead to serve the wielder." },
    { id: "amulet", name: "Amulet of Dark Desires", description: "Amulet that corrupts the wearer's enemies, turning them against each other." },
    { id: "banecharm", name: "Banecharm", description: "Charm imbued with curses, weakening foes and draining their vitality." },
    { id: "crystal", name: "Crystal of Time Stop", description: "Crystal that can temporarily halt time, freezing enemies in place." },
    { id: "darkorb", name: "Dark Orb of Annihilation", description: "Orb that unleashes a blast of pure darkness, consuming all in its path." },
  ],
};

export const legendaryGearOptions = {
  weapons: [
    { id: "excalibur", name: "Excalibur", description: "The legendary sword of King Arthur, said to be the most powerful weapon in existence." },
    { id: "mjoelnir", name: "Mjölnir", description: "The hammer of Thor, capable of summoning thunder and lightning." },
    { id: "masamune", name: "Masamune", description: "A katana forged by a legendary swordsmith, possessing unparalleled sharpness and cutting power." },
    { id: "gungnir", name: "Gungnir", description: "The spear of Odin, never missing its target and returning to the wielder's hand." },
    { id: "caladbolg", name: "Caladbolg", description: "A mythical greatsword with the power to cleave mountains and split the seas." },
    { id: "ragnarok", name: "Ragnarok Blade", description: "A blade forged in the fires of the apocalypse, capable of ending worlds." },
  ],
  armor: [
    { id: "adamantite", name: "Adamantite Plate", description: "Armor forged from the mythical metal adamantite, impervious to all but the most powerful attacks." },
    { id: "eternalguard", name: "Eternalguard Shield", description: "A shield blessed by the gods, capable of shielding the wearer from any harm." },
    { id: "celestialrobe", name: "Celestial Robe", description: "Robes woven from starlight and moonbeams, granting the wearer divine protection." },
    { id: "dragonheart", name: "Dragonheart Armor", description: "Armor infused with the essence of a dragon's heart, granting immense strength and resilience." },
    { id: "seraphiccloak", name: "Seraphic Cloak", description: "A cloak imbued with the light of the heavens, rendering the wearer invulnerable to darkness and evil." },
    { id: "shadowbane", name: "Shadowbane Armor", description: "Armor forged from the essence of darkness, granting the wearer mastery over shadows." },
  ],
  items: [
    { id: "elixir", name: "Elixir of Immortality", description: "Grants the drinker eternal life and youth." },
    { id: "relic", name: "Relic of Power", description: "A mystical artifact imbued with ancient magic, granting immense power to its wielder." },
    { id: "orb", name: "Orb of Omniscience", description: "An orb that grants the wielder unlimited knowledge and foresight." },
    { id: "scepter", name: "Scepter of Dominion", description: "A scepter that grants the wielder control over all aspects of existence." },
    { id: "crown", name: "Crown of Kings", description: "A crown that bestows the wearer with unmatched authority and leadership." },
    { id: "phylactery", name: "Phylactery of Lichdom", description: "A phylactery that grants the user eternal undeath and necromantic powers." },
  ],
};

export const moneyOptions = [
  { id: "poor", name: "Poor", amount: "50 Gold", description: "Barely enough to get by." },
  { id: "modest", name: "Modest", amount: "200 Gold", description: "A modest amount to start your adventure." },
  { id: "wealthy", name: "Wealthy", amount: "1000 Gold", description: "Well-funded and ready for anything." },
];

export const personalityTraits = [
  { id: 1, name: "Brave" },
  { id: 2, name: "Cunning" },
  { id: 3, name: "Generous" },
  { id: 4, name: "Loyal" },
  { id: 5, name: "Optimistic" },
  { id: 6, name: "Resourceful" },
  { id: 7, name: "Stubborn" },
  { id: 8, name: "Witty" },
  { id: 9, name: "Adventurous" },
  { id: 10, name: "Compassionate" },
  { id: 11, name: "Diligent" },
  { id: 12, name: "Enthusiastic" },
  { id: 13, name: "Honest" },
  { id: 14, name: "Meticulous" },
  { id: 15, name: "Tactful" },
  { id: 16, name: "Creative" },
  { id: 17, name: "Energetic" },
  { id: 18, name: "Independent" },
  { id: 19, name: "Patient" },
  { id: 20, name: "Resilient" },
];
