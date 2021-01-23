import { gql } from 'apollo-server';

export default gql`
  type OneRepMaxes {
    # bench press one rep max
    bench: Int!
    # overhead press one rep max
    press: Int!
    # deadlift one rep max
    deadlift: Int!
    # squat one rep max
    squat: Int!
  }

  type User {
    # user first name
    firstName: String!
    # user workout history
    history: [Workout!]
    # user id
    id: ID!
    # user last name
    lastName: String!
    # user's one rep maxes
    oneRepMaxes: OneRepMaxes!
    # what week of beyond 5/3/1 the user is on
    week: Int!
  }

  type Lift {
    # number of reps lifted
    reps: Int!
    # weight lifted
    weight: Int!
  }

  # one day add accessories
  type Workout {
    # whether or not this workout is ongoing
    active: Boolean!
    # workout id
    id: ID!
    # core lifts this workout (generated using user's one rep maxes and current week)
    coreSets: [Lift!]!
    # did the user do their first set last
    didFirstSetLast: Boolean!
    # did the warm up
    didWarmUp: Boolean!
    # heavy lifts added in after the core sets
    jokerSets: [Lift!]
    # what lift are we doing (bench, press, etc.). Look into enums for this
    liftType: String!
  }

  type Query {
    users: [User!]
    user(id: ID): User
  }
`;