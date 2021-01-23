import mutationResolvers from './mutation/index.js'
import queryResolvers from './query/index.js'

const resolvers = {
  Mutation: mutationResolvers,
  Query: queryResolvers,
};

export default resolvers