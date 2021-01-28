import Workout from '../../data/models/Workout.js';

export default async function activeWorkout(parent, args, context, info) {
  return Workout.findOne({ active: true, user: parent.id });
}
