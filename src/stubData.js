export const userWorkoutsHistory = [
  {
    active: false,
    id: '1',
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
    id: '2',
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
    liftType: 'DEADLIFT',
  },
];

const user = {
  currentLiftType: 'SQUAT',
  firstName: 'Martin',
  history: userWorkoutsHistory,
  id: '1234',
  lastName: 'Bee',
  liftOrder: ['BENCH', 'SQUAT', 'PRESS', 'DEADLIFT'],
  trainingMaxes: {
    BENCH: 190,
    DEADLIFT: 195,
    PRESS: 100,
    SQUAT: 160,
  },
  week: 3,
};

export const users = [user];
