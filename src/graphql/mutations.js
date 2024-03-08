/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNPC = /* GraphQL */ `
  mutation CreateNPC(
    $input: CreateNPCInput!
    $condition: ModelNPCConditionInput
  ) {
    createNPC(input: $input, condition: $condition) {
      id
      name
      description
      race
      attributes {
        agility
        smarts
        spirit
        strength
        vigor
      }
      skills {
        skillId
        level
      }
      gear {
        weapon
        armor
        item
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNPC = /* GraphQL */ `
  mutation UpdateNPC(
    $input: UpdateNPCInput!
    $condition: ModelNPCConditionInput
  ) {
    updateNPC(input: $input, condition: $condition) {
      id
      name
      description
      race
      attributes {
        agility
        smarts
        spirit
        strength
        vigor
      }
      skills {
        skillId
        level
      }
      gear {
        weapon
        armor
        item
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNPC = /* GraphQL */ `
  mutation DeleteNPC(
    $input: DeleteNPCInput!
    $condition: ModelNPCConditionInput
  ) {
    deleteNPC(input: $input, condition: $condition) {
      id
      name
      description
      race
      attributes {
        agility
        smarts
        spirit
        strength
        vigor
      }
      skills {
        skillId
        level
      }
      gear {
        weapon
        armor
        item
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
