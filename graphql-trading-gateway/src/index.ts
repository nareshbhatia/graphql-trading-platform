// -----------------------------------------------------------------------------
// Load environment variables from the .env file before doing anything else
// -----------------------------------------------------------------------------
import { config as envConfig } from 'dotenv';
envConfig();

// --- Remaining imports -----
import { ApolloServer } from 'apollo-server';
import { dataSources } from './datasources';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
