import User from '../../data/models/User.js';
import Workout from '../../data/models/Workout.js';

// is current lift confusing
const getNewCurrentLift = (lastLiftType, liftOrder) => {
  const lastLiftIndex = liftOrder.indexOf(lastLiftType);

  const restartLiftOrder = lastLiftIndex >= liftOrder.length;
  const nextLiftIndex = restartLiftOrder ? 0 : lastLiftIndex + 1;

  return liftOrder[nextLiftIndex];
};

// maybe want to batch so they all fail at same time?
export default async function completeWorkout(parent, args, context, info) {
  try {
    const { input } = args;
    const { id } = input;

    const workoutUpdates = { active: false };
    const workout = await Workout.findByIdAndUpdate(id, workoutUpdates, {
      new: true,
    }).populate('user');

    const { liftType, user } = workout;
    const { history, id: userId, liftOrder } = user;

    const updatedUserHistory = [...history, workout];

    const userUpdates = {
      currentLiftType: getNewCurrentLift(liftType, liftOrder),
      history: updatedUserHistory,
    };
    await User.findByIdAndUpdate(userId, userUpdates);

    return {
      code: '200',
      message: 'Successfully completed workout!',
      success: true,
      workout,
    };
  } catch (err) {
    return {
      code: '400',
      errorMessage: err.message,
      message: 'Failed to save completed workout.',
      success: false,
      workout: null,
    };
  }
}
