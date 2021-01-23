import { gql } from 'apollo-server';

export default gql`
  # Query Types

  "A User's one rep maxes"
  type OneRepMaxes {
    "Bench press one rep max"
    bench: Int!

    "Overhead press one rep max"
    press: Int!

    "Deadlift one rep max"
    deadlift: Int!

    "Squat one rep max"
    squat: Int!
  }

  "A user"
  type User {
    "User first name"
    firstName: String!

    "User workout history"
    history: [Workout!]

    "User id"
    id: ID!

    "User last name"
    lastName: String!

    "User's one rep maxes"
    oneRepMaxes: OneRepMaxes!

    "What week of beyond 5/3/1 the user is on"
    week: Int!
  }

  "A single lift - used in Workout"
  type Lift {
    "Number of reps lifted"
    reps: Int!

    "Weight lifted"
    weight: Int!
  }

  # one day add accessories
  "A Workout"
  type Workout {
    "Whether or not this workout is ongoing"
    active: Boolean!

    "Workout id"
    id: ID!

    "Core lifts this workout (generated using user's one rep maxes and current week)"
    coreSets: [Lift!]!

    "Did the user do their first set last"
    didFirstSetLast: Boolean!

    "Did the warm up"
    didWarmUp: Boolean!

    "Heavy lifts added in after the core sets"
    jokerSets: [Lift!]

    "What lift are we doing (bench, press, etc.). Look into enums for this"
    liftType: String!
  }

  type Query {
    users: [User!]
    user(id: ID): User
  }

  # Mutation Types

  interface MutationResponse {
    "Status code"
    code: String!

    "Ui displayable message"
    message: String!

    "Whether or not the mutation succeeded"
    success: Boolean!
  }

  "A User's one rep maxes"
  input OneRepMaxesInput {
    "Bench press one rep max"
    bench: Int!

    "Overhead press one rep max"
    press: Int!

    "Deadlift one rep max"
    deadlift: Int!

    "Squat one rep max"
    squat: Int!
  }

  input UpdateUserOneRepMaxesInput {
    "The id of the user being updated"
    id: ID!

    "Updated user oneRepMaxes"
    oneRepMaxes: OneRepMaxesInput
  }

  type UpdateUserOneRepMaxesResponse implements MutationResponse {
    code: String!
    message: String!
    success: Boolean!
    user: User
  }

  input UpdateUserWeekInput {
    "The id of the user being updated"
    id: ID!

    "Updated user workout week"
    week: Int!
  }

  type UpdateUserWeekResponse implements MutationResponse {
    code: String!
    message: String!
    success: Boolean!
    user: User
  }

  # Think about if we want one update user mutation or these smaller ones
  # these are technically clearer and more secure, but a bit of a pain
  type Mutation {
    "Updates the user's one rep maxes"
    updateUserOneRepMaxes(input: UpdateUserOneRepMaxesInput!): UpdateUserOneRepMaxesResponse

    "Updates the user's current workout week"
    updateUserWeek(input: UpdateUserWeekInput!): UpdateUserWeekResponse
  }
`;