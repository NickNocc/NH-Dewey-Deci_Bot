import { gql } from 'apollo-server-express';

// Check me Query later || [String]
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
        bookCount: Int
    }

    type Query {
        me: User
        users(username: String!): User
        savedBooks: [Book]
    }


`;

module.exports = typeDefs;