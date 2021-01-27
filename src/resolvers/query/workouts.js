import Workout from '../../data/models/Workout.js';

export default async function workouts(parent, args, context, info) {
  if (args.isActive) {
    return Workout.find({ active: true }).populate('user');
  }

  return Workout.find().populate('user');
}
