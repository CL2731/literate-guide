const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
  }

  type Query {
    me: 
  }

  type Mutation {
    login: 
    addUser:
    saveBook:
    removeBook: 
  }
`;

module.exports = typeDefs;