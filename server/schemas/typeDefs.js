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

    type Book {
        bookId: String
        authors: [String]
        desctiption: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!)
        removeBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!)
    }
`;

module.exports = typeDefs;