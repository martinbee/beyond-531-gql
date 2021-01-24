import createWorkout from './createWorkout.js';
import updateUserLiftOrder from './updateUserLiftOrder.js';
import updateUserOneRepMaxes from './updateUserOneRepMaxes.js';
import updateUserWeek from './updateUserWeek.js';

const mutationResolvers = {
  createWorkout,
  updateUserLiftOrder,
  updateUserOneRepMaxes,
  updateUserWeek,
};

export default mutationResolvers;
