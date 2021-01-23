import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers/index.js'
import typeDefs from './typeDefs/index.js'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});