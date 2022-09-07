const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  type Todo {
    id: ID
    title: String
    desc: String
    isPost: Boolean
  }

  type Mutation {
    createTodo(title: String!, desc: String!, isPost: Boolean): Todo
  }
`;
