import mongoose from 'mongoose';

import { LIFT_TYPE } from '../../enums.js';

const { Schema } = mongoose;

const TrainingMaxesSchema = new Schema(
  {
    [LIFT_TYPE.BENCH]: {
      type: Number,
      required: true,
    },
    [LIFT_TYPE.DEADLIFT]: {
      type: Number,
      required: true,
    },
    [LIFT_TYPE.PRESS]: {
      type: Number,
      required: true,
    },
    [LIFT_TYPE.SQUAT]: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const UserSchema = new Schema(
  {
    currentLiftType: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Workout',
      },
    ],
    lastName: {
      type: String,
      required: true,
    },
    liftOrder: {
      type: [String],
      required: true,
    },
    trainingMaxes: TrainingMaxesSchema,
    week: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
