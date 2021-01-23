import { ApolloServer } from 'apollo-server';

import { users } from './stubData.js'
import typeDefs from './typeDefs.js'

const resolvers = {
  Query: {
    user: (parent, args, context, info) => users.find(({ id }) => args.id === id),
    users: () => users,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});