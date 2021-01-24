import Workout from '../../data/models/Workout.js';

export default async function user(parent, args, context, info) {
  return Workout.findById(args.id).populate('user');
}
