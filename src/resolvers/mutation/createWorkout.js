import User from '../../data/models/User.js';
import Workout from '../../data/models/Workout.js';

const weekLiftTemplatesMap = {
  1: [
    {
      percentage: 0.65,
      reps: 5,
    },
    {
      percentage: 0.75,
      reps: 5,
    },
    {
      percentage: 0.85,
      reps: 5,
    },
  ],
  2: [
    {
      percentage: 0.7,
      reps: 3,
    },
    {
      percentage: 0.8,
      reps: 3,
    },
    {
      percentage: 0.9,
      reps: 3,
    },
  ],
  3: [
    {
      percentage: 0.75,
      reps: 5,
    },
    {
      percentage: 0.85,
      reps: 3,
    },
    {
      percentage: 0.95,
      reps: 1,
    },
  ],
};

const getCoreSets = (currentLiftType, trainingMaxes, week) => {
  const liftTemplates = weekLiftTemplatesMap[week];

  const lifts = liftTemplates.map(({ percentage, reps }) => ({
    completed: false,
    reps,
    weight: percentage * trainingMaxes[currentLiftType],
  }));

  return lifts;
};

export default async function createWorkout(parent, args, context, info) {
  try {
    const { input } = args;
    const { userId } = input;
    const user = await User.findById(userId);

    if (!user) {
      return {
        code: '400',
        errorMessage: 'Failed to find workout.',
        message: 'Failed to create workout.',
        success: false,
        workout: null,
      };
    }

    const { currentLiftType, trainingMaxes, week } = user;

    const workoutData = {
      active: true,
      coreSets: getCoreSets(currentLiftType, trainingMaxes, week),
      didFirstSetLast: false,
      didWarmUp: false,
      jokerSets: [],
      liftType: currentLiftType,
      user,
    };

    const workout = new Workout(workoutData);

    await workout.save();

    return {
      code: '200',
      message: 'Successfully created workout!',
      success: true,
      workout,
    };
  } catch (err) {
    return {
      code: '400',
      errorMessage: err.message,
      message: 'Failed to create workout.',
      success: false,
      workout: null,
    };
  }
}
