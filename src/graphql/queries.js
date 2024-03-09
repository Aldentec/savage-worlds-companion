/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNPC = /* GraphQL */ `
  query GetNPC($id: ID!) {
    getNPC(id: $id) {
      id
      name
      race
      attributes
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNPCS = /* GraphQL */ `
  query ListNPCS(
    $filter: ModelNPCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNPCS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        race
        attributes
        skills
        money
        personalityTraits
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
