const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  accessKeyId: 'AKIAQK3ACGCR6ZKHZ3FS',
  secretAccessKey: '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',
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
      skills: { M: npcData.skills },
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
