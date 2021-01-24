export const user = {
  currentLiftType: 'BENCH',
  firstName: 'Martin',
  history: [],
  lastName: 'Bee',
  liftOrder: ['BENCH', 'SQUAT', 'PRESS', 'DEADLIFT'],
  trainingMaxes: {
    BENCH: 190,
    DEADLIFT: 195,
    PRESS: 100,
    SQUAT: 160,
  },
  week: 1,
};

export const workouts = [
  {
    active: false,
    coreSets: [
      {
        completed: true,
        reps: 5,
        weight: 125,
      },
      {
        completed: true,
        reps: 5,
        weight: 145,
      },
      {
        completed: true,
        reps: 7,
        weight: 165,
      },
    ],
    didFirstSetLast: true,
    didWarmUp: true,
    jokerSets: [
      {
        completed: true,
        reps: 2,
        weight: 185,
      },
      {
        completed: true,
        reps: 1,
        weight: 195,
      },
    ],
    liftType: 'BENCH',
  },
  {
    active: false,
    coreSets: [
      {
        completed: true,
        reps: 5,
        weight: 135,
      },
      {
        completed: true,
        reps: 3,
        weight: 165,
      },
      {
        completed: true,
        reps: 5,
        weight: 175,
      },
    ],
    didFirstSetLast: true,
    didWarmUp: false,
    jokerSets: [
      {
        completed: true,
        reps: 3,
        weight: 185,
      },
      {
        completed: true,
        reps: 1,
        weight: 195,
      },
    ],
    liftType: 'SQUAT',
  },
];
