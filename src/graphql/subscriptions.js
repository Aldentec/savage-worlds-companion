/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNPC = /* GraphQL */ `
  subscription OnCreateNPC($filter: ModelSubscriptionNPCFilterInput) {
    onCreateNPC(filter: $filter) {
      id
      name
      race
      attributes
      parry
      pace
      toughness
      skills
      edges {
        id
        name
        description
        __typename
      }
      hindrances {
        id
        name
        description
        __typename
      }
      gear {
        id
        name
        description
        __typename
      }
      money
      personalityTraits
      background
      secret
      height
      weight
      powers {
        id
        name
        description
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNPC = /* GraphQL */ `
  subscription OnUpdateNPC($filter: ModelSubscriptionNPCFilterInput) {
    onUpdateNPC(filter: $filter) {
      id
      name
      race
      attributes
      parry
      pace
      toughness
      skills
      edges {
        id
        name
        description
        __typename
      }
      hindrances {
        id
        name
        description
        __typename
      }
      gear {
        id
        name
        description
        __typename
      }
      money
      personalityTraits
      background
      secret
      height
      weight
      powers {
        id
        name
        description
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNPC = /* GraphQL */ `
  subscription OnDeleteNPC($filter: ModelSubscriptionNPCFilterInput) {
    onDeleteNPC(filter: $filter) {
      id
      name
      race
      attributes
      parry
      pace
      toughness
      skills
      edges {
        id
        name
        description
        __typename
      }
      hindrances {
        id
        name
        description
        __typename
      }
      gear {
        id
        name
        description
        __typename
      }
      money
      personalityTraits
      background
      secret
      height
      weight
      powers {
        id
        name
        description
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
