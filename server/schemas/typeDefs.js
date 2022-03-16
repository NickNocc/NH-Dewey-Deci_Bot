const { gql } = require('apollo-server-express');

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
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    input bookId {
        description: String
        title: String
        bookId: String
        image: String
        link: String
        authors: [String]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): User
        saveBook(savedBook: bookId!): User
        removeBook(bookId: ID): User
    }
`;

module.exports = typeDefs;