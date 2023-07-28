import { getUsers, loginUser, createUser } from "../../handlers/users/user.service.js";

export const resolvers = {
    Query: {
        users: async () => getUsers(),
    },
    Mutation: {
        CreateUser: async (_, { input }) => createUser(input),
        UserLogin: async (_, { input }) => loginUser(input),
    },
};
