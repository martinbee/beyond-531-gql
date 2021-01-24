import User from '../models/User.js';
import Workout from '../models/Workout.js';
import { user, workouts } from './testData.js';

export default async function seedTestData() {
  try {
    const isThereAlreadyAUser = await User.findOne({});

    if (!isThereAlreadyAUser) {
      console.log('Starting to seed...');

      const newUser = new User(user);
      await newUser.save();

      console.log(`${newUser.firstName} successfully seeded.`);

      newUser.history = await Promise.all(
        workouts.map(async (workout) => {
          const workoutWithUser = {
            user: newUser._id,
            ...workout,
          };

          const newWorkout = new Workout(workoutWithUser);
          await newWorkout.save();

          console.log(`${newWorkout.liftType} workout successfully seeded.`);

          return newWorkout._id;
        }),
      );

      await newUser.save();

      console.log('Seeding Finished!');
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
