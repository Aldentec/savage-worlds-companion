const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-west-2'
});

// Create DynamoDB service object
const dynamodb = new AWS.DynamoDB();

// Function to save NPC to DynamoDB
const saveNPCToDynamoDB = (npcData) => {
  const id = uuidv4();
  // Construct params object for DynamoDB putItem operation
  const params = {
    TableName: 'NPC-v7agwq4ozvhlxcvsqqgjtwznua-dev', // Specify your DynamoDB table name
    Item: {
      id: { S: id },
      name: { S: npcData.name },
      race: { S: npcData.race },
      attributes: { M: npcData.attributes },
      parry: { S: npcData.parry },
      pace: { S: npcData.pace },
      toughness: { S: npcData.toughness },
      skills: { M: npcData.skills },
      edges: { M: npcData.edges },
      hindrances: { M: npcData.hindrances },
      gear: { M: npcData.gear },
      money: { S: npcData.money },
      personalityTraits: { M: npcData.personalityTraits },
      background: { S: npcData.background },
      secret: { S: npcData.secret },
      height: { S: npcData.height },
      weight: { S: npcData.weight },
      powers: { M: npcData.powers },
    },
  };

  // Return a promise for the putItem operation
  return new Promise((resolve, reject) => {
    dynamodb.putItem(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export default saveNPCToDynamoDB;
