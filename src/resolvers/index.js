import mutationResolvers from './mutation/index.js';
import queryResolvers from './query/index.js';
import userResolvers from './user/index.js';

const resolvers = {
  Mutation: mutationResolvers,
  Query: queryResolvers,
  User: userResolvers,
};

export default resolvers;
