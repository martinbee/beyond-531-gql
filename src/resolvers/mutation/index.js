import createWorkout from './createWorkout.js';
import updateUserLiftOrder from './updateUserLiftOrder.js';
import updateUserTrainingMaxes from './updateUserTrainingMaxes.js';
import updateUserWeek from './updateUserWeek.js';
import updateWorkout from './updateWorkout.js';

const mutationResolvers = {
  createWorkout,
  updateUserLiftOrder,
  updateUserTrainingMaxes,
  updateUserWeek,
  updateWorkout,
};

export default mutationResolvers;
