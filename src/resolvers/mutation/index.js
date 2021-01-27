import completeWorkout from './completeWorkout.js';
import createWorkout from './createWorkout.js';
import updateUser from './updateUser.js';
import updateWorkout from './updateWorkout.js';

const mutationResolvers = {
  completeWorkout,
  createWorkout,
  updateUser,
  updateWorkout,
};

export default mutationResolvers;
