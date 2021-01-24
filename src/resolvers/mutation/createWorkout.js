import { users } from '../../stubData.js';

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

export default function createWorkout(parent, args, context, info) {
  const { input } = args;
  const { userId } = input;
  const workoutUser = users.find((user) => user.id === userId);

  if (!workoutUser) {
    return {
      code: '400',
      message: 'Failed to create workout.',
      success: false,
      workout: null,
    };
  }

  const { currentLiftType, trainingMaxes, week } = workoutUser;

  const workout = {
    active: true,
    id: '1234',
    coreSets: getCoreSets(currentLiftType, trainingMaxes, week),
    didFirstSetLast: false,
    didWarmUp: false,
    jokerSets: [],
    liftType: currentLiftType,
  };

  return {
    code: '200',
    message: 'Successfully created workout!',
    success: true,
    workout,
  };
}
