import mongoose from 'mongoose';

const { Schema } = mongoose;

const LiftSchema = new Schema({
  completed: {
    type: Boolean,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const WorkoutSchema = new Schema(
  {
    active: {
      type: Boolean,
      required: true,
    },

    coreSets: {
      type: [LiftSchema],
      required: true,
    },

    didFirstSetLast: {
      type: Boolean,
      default: false,
      required: true,
    },

    didWarmUp: {
      type: Boolean,
      default: false,
      required: true,
    },

    jokerSets: {
      type: [LiftSchema],
    },

    liftType: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Workout', WorkoutSchema);
