import Workout from '../../data/models/Workout.js';

export default async function updateWorkout(parent, args, context, info) {
  try {
    const { input } = args;
    const { id, updates } = input;

    const workout = await Workout.findByIdAndUpdate(id, updates, {
      new: true,
    });

    return {
      code: '200',
      message: 'Successfully updated workout!',
      success: true,
      workout,
    };
  } catch (err) {
    // do something with err?
    return {
      code: '400',
      message: 'Failed to update workout.',
      success: false,
      workout: null,
    };
  }
}
