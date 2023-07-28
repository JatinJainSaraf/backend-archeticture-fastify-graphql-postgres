import fastify from 'fastify';
import { PORT } from './config.js';
import { GraphQLServer } from './graphql/index.js';
import { fastifyApolloHandler } from '@as-integrations/fastify';
import logger from './lib/logger.js';

const app = fastify({ logger: true,  keepAliveTimeout: 61 * 1000, });
const context = async (request) => {
    return { dataLoaders: {}, headers: request.headers };
};

const start = async () => {
    try {
        await GraphQLServer.start();
        app.route({
            url: '/graphql',
            method: ['GET', 'POST', 'OPTIONS'],
            handler: fastifyApolloHandler(GraphQLServer, { context }),
        });
        await app.listen(PORT, '0.0.0.0');
        logger.info(`Server listening on ${PORT}`);
    } catch (err) {
        logger.error('Error on creating GraphQL');
        logger.error(err);
        process.exit(1);
    }
};
start();

