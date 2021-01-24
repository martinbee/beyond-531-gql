const userWorkoutsHistory = [
  {
    active: false,
    id: '1',
    coreSets: [
      {
        reps: 5,
        weight: 125,
      },
      {
        reps: 5,
        weight: 145,
      },
      {
        reps: 7,
        weight: 165,
      },
    ],
    didFirstSetLast: true,
    didWarmUp: true,
    jokerSets: [
      {
        reps: 2,
        weight: 185,
      },
      {
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
        reps: 5,
        weight: 135,
      },
      {
        reps: 3,
        weight: 165,
      },
      {
        reps: 5,
        weight: 175,
      },
    ],
    didFirstSetLast: true,
    didWarmUp: false,
    jokerSets: [
      {
        reps: 3,
        weight: 185,
      },
      {
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
  oneRepMaxes: {
    BENCH: 190,
    DEADLIFT: 195,
    PRESS: 100,
    SQUAT: 160,
  },
  week: 3,
};

export const users = [user];
