import createWorkout from './createWorkout.js';
import updateUser from './updateUser.js';
import updateWorkout from './updateWorkout.js';

const mutationResolvers = {
  createWorkout,
  updateUser,
  updateWorkout,
};

export default mutationResolvers;
