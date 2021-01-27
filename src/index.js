import { ApolloServer } from 'apollo-server';

import connectMongoose from './data/connectMongoose.js';
import seedTestData from './data/seedDb/index.js';
import resolvers from './resolvers/index.js';
import typeDefs from './typeDefs/index.js';

connectMongoose();
seedTestData();

const cors = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const server = new ApolloServer({ typeDefs, resolvers, cors });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
