import mutationResolvers from './mutation/index.js'
import queryResolvers from './query/index.js'

const resolvers = {
  Query: queryResolvers,
};

export default resolvers