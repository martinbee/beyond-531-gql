const userWorkoutsHistory = [
  {
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
    liftType: 'bench',
  },
  {
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
    liftType: 'deadlift',
  },
]

const user = {
  firstName: 'Martin',
  history: userWorkoutsHistory,
  id: '1234',
  lastName: 'Bee',
  oneRepMaxes: {
    bench: 190,
    deadlift: 195,
    press: 100,
    squat: 160,
  },
  week: 1,
}

export const users = [user]