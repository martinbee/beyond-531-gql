import { gql } from 'apollo-server';

import { LIFT_TYPE } from '../enums.js';

export default gql`
  # Query Types

  enum LiftType {
    ${Object.keys(LIFT_TYPE)}
  }

  "A User's training max"
  type TrainingMaxes {
    "Bench press training max"
    ${LIFT_TYPE.BENCH}: Float!

    "Overhead press training max"
    ${LIFT_TYPE.PRESS}: Float!

    "Deadlift training max"
    ${LIFT_TYPE.DEADLIFT}: Float!

    "Squat training max"
    ${LIFT_TYPE.SQUAT}: Float!
  }

  "A user"
  type User {
    "User's current lift"
    currentLiftType: LiftType!

    "User's first name"
    firstName: String!

    "User's workout history"
    history: [Workout!]

    "User's id"
    id: ID!

    "User's last name"
    lastName: String!

    "User's preferred order of lifts"
    liftOrder: [LiftType!]!

    "User's trianing maxes"
    trainingMaxes: TrainingMaxes!

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

    "Core lifts this workout (generated using user's training maxes and current week)"
    coreSets: [Lift!]!

    "Did the user do their first set last"
    didFirstSetLast: Boolean!

    "Did the warm up"
    didWarmUp: Boolean!

    "Heavy lifts added in after the core sets"
    jokerSets: [Lift!]

    "What lift are we doing (bench, press, etc.). Look into enums for this"
    liftType: LiftType!

    "The user this workout belongs to"
    user: User
  }

  type Query {
    users: [User]
    user(id: ID): User
    workouts(isActive: Boolean): [Workout]
    workout(id: ID): Workout
  }

  # Mutation Types

  interface MutationResponse {
    "Status code"
    code: String!

    "Error message"
    errorMessage: String

    "Ui displayable message"
    message: String!

    "Whether or not the mutation succeeded"
    success: Boolean!
  }

  input CompleteWorkoutInput {
    id: ID!
  }

  type CompleteWorkoutResponse implements MutationResponse {
    code: String!
    errorMessage: String
    message: String!
    success: Boolean!
    workout: Workout
  }

  input CreateWorkoutInput {
    userId: ID!
  }

  type CreateWorkoutResponse implements MutationResponse {
    code: String!
    errorMessage: String
    message: String!
    success: Boolean!
    workout: Workout
  }

  "A User's training maxes"
  input TrainingMaxesInput {
    "Bench press training max"
    ${LIFT_TYPE.BENCH}: Float!

    "Overhead press training max"
    ${LIFT_TYPE.PRESS}: Float!

    "Deadlift training max"
    ${LIFT_TYPE.DEADLIFT}: Float!

    "Squat training max"
    ${LIFT_TYPE.SQUAT}: Float!
  }

  "Possible fields that can be updated on user"
  input UpdateUserUpdates {
    "User's current lift"
    currentLiftType: LiftType

    "User's preferred order of lifts"
    liftOrder: [LiftType!]

    "User's training maxes"
    trainingMaxes: TrainingMaxesInput

    "What week of beyond 5/3/1 the user is on"
    week: Int
  }

  input UpdateUserInput {
    id: ID!

    updates: UpdateUserUpdates
  }

  type UpdateUserResponse implements MutationResponse {
    code: String!
    errorMessage: String
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
    "Core lifts this workout (generated using user's training maxes and current week)"
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
    errorMessage: String
    message: String!
    success: Boolean!
    workout: Workout
  }

  type Mutation {
    "Completes a workout"
    completeWorkout(input: CompleteWorkoutInput!): CompleteWorkoutResponse

    "Creates a workout"
    createWorkout(input: CreateWorkoutInput!): CreateWorkoutResponse

    "Updates a user"
    updateUser(input: UpdateUserInput!): UpdateUserResponse

    "Updates a workout"
    updateWorkout(input: UpdateWorkoutInput!): UpdateWorkoutResponse
  }
`;
