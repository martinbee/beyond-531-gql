import { ApolloServer } from 'apollo-server';

import connectMongoose from './data/connectMongoose.js';
import seedTestData from './data/seedDb/index.js';
import resolvers from './resolvers/index.js';
import typeDefs from './typeDefs/index.js';

connectMongoose();
seedTestData();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
