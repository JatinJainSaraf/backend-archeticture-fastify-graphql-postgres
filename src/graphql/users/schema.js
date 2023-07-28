import { gql } from "graphql-tag";

export const typeDefs = gql`
    type User {
        password: String!
        email: String!
        id: ID!
    }

    type UserLogin {
        email: String!
        password: String!
    }

    input UserLoginInput {
        email: String!
        password: String!
    }

    type CreateUser {
        email: String!
        password: String!
    }

    type Query {
        users: [User!]
    }

    type Mutation {
        UserLogin(input: UserLoginInput): UserLogin
        CreateUser(input: UserLoginInput): CreateUser
    }
`;
