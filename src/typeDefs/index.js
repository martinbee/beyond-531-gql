import { gql } from 'apollo-server';

const LIFT_TYPE = {
  BENCH: 'BENCH',
  PRESS: 'PRESS',
  DEADLIFT: 'DEADLIFT',
  SQUAT: 'SQUAT',
};

export default gql`
  # Query Types

  enum LiftType {
    ${Object.keys(LIFT_TYPE)}
  }

  "A User's one rep maxes"
  type OneRepMaxes {
    "Bench press one rep max"
    ${LIFT_TYPE.BENCH}: Float!

    "Overhead press one rep max"
    ${LIFT_TYPE.PRESS}: Float!

    "Deadlift one rep max"
    ${LIFT_TYPE.DEADLIFT}: Float!

    "Squat one rep max"
    ${LIFT_TYPE.SQUAT}: Float!
  }

  "A user"
  type User {
    "User current lift"
    currentLiftType: LiftType!

    "User first name"
    firstName: String!

    "User workout history"
    history: [Workout!]

    "User id"
    id: ID!

    "User last name"
    lastName: String!

    "User's preferred order of lifts"
    liftOrder: [LiftType!]!

    "User's one rep maxes"
    oneRepMaxes: OneRepMaxes!

    "What week of beyond 5/3/1 the user is on"
    week: Int!
  }

  "A single lift - used in Workout"
  type Lift {
    "Has this lift been lifted/completed"
    completed: Boolean!

    "Number of reps lifted"
    reps: Int!

    "Weight lifted"
    weight: Float!
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
    liftType: LiftType!
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

  input CreateWorkoutInput {
    userId: ID!
  }

  type CreateWorkoutResponse implements MutationResponse {
    code: String!
    message: String!
    success: Boolean!
    workout: Workout
  }

  input UpdateUserLiftOrderInput {
    id: ID!
    liftOrder: [LiftType!]!
  }

  type UpdateUserLiftOrderResponse implements MutationResponse {
    code: String!
    message: String!
    success: Boolean!
    user: User
  }

  "A User's one rep maxes"
  input OneRepMaxesInput {
    "Bench press one rep max"
    ${LIFT_TYPE.BENCH}: Float!

    "Overhead press one rep max"
    ${LIFT_TYPE.PRESS}: Float!

    "Deadlift one rep max"
    ${LIFT_TYPE.DEADLIFT}: Float!

    "Squat one rep max"
    ${LIFT_TYPE.SQUAT}: Float!
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

  "A single lift - used in Workout"
  input LiftInput {
    "Has this lift been lifted/completed"
    completed: Boolean!

    "Number of reps lifted"
    reps: Int!

    "Weight lifted"
    weight: Float!
  }

  "Possible fields that can be updated on workout"
  input UpdateWorkoutUpdates {
    "Core lifts this workout (generated using user's one rep maxes and current week)"
    coreSets: [LiftInput!]

    "Did the user do their first set last"
    didFirstSetLast: Boolean

    "Did the warm up"
    didWarmUp: Boolean

    "Heavy lifts added in after the core sets"
    jokerSets: [LiftInput!]

    "What lift are we doing (bench, press, etc.). Look into enums for this"
    liftType: LiftType
  }

  input UpdateWorkoutInput {
    "The id of the workout being updated"
    id: ID!

    "Possible fields that can be updated on workout"
    updates: UpdateWorkoutUpdates!
  }

  type UpdateWorkoutResponse implements MutationResponse {
    code: String!
    message: String!
    success: Boolean!
    workout: Workout
  }

  # Think about if we want one update user mutation or these smaller ones
  # these are technically clearer and more secure, but a bit of a pain
  type Mutation {
    "Creates a workout"
    createWorkout(input: CreateWorkoutInput!): CreateWorkoutResponse

    "Updates the user's lift order"
    updateUserLiftOrder(
      input: UpdateUserLiftOrderInput!
    ): UpdateUserLiftOrderResponse

    "Updates the user's one rep maxes"
    updateUserOneRepMaxes(
      input: UpdateUserOneRepMaxesInput!
    ): UpdateUserOneRepMaxesResponse

    "Updates the user's current workout week"
    updateUserWeek(input: UpdateUserWeekInput!): UpdateUserWeekResponse

    "Updates a workout"
    updateWorkout(input: UpdateWorkoutInput!): UpdateWorkoutResponse
  }
`;
