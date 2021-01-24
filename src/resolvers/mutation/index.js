import createWorkout from './createWorkout.js';
import updateUserLiftOrder from './updateUserLiftOrder.js';
import updateUserOneRepMaxes from './updateUserOneRepMaxes.js';
import updateUserWeek from './updateUserWeek.js';
import updateWorkout from './updateWorkout.js';

const mutationResolvers = {
  createWorkout,
  updateUserLiftOrder,
  updateUserOneRepMaxes,
  updateUserWeek,
  updateWorkout,
};

export default mutationResolvers;
