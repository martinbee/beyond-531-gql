import { userWorkoutsHistory } from '../../stubData.js';

export default function updateWorkout(parent, args, context, info) {
  const { input } = args;
  const { id, updates } = input;
  const workoutToUpdate = userWorkoutsHistory.find(
    (workout) => workout.id === id
  );

  if (!workoutToUpdate) {
    return {
      code: '400',
      message: 'Failed to update workout.',
      success: false,
      workout: null,
    };
  }

  const updatedWorkout = {
    ...workoutToUpdate,
    ...updates,
  };

  return {
    code: '200',
    message: 'Successfully updated workout!',
    success: true,
    workout: updatedWorkout,
  };
}
