import {ApolloServer} from "@apollo/server";
import {typeDefs} from "./users/schema.js";
import {resolvers} from "./users/resolvers.js";

export const GraphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
});

