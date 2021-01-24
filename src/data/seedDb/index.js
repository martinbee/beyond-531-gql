import User from '../models/User.js';
// import Workout from '../models/Workout';
import { user } from './testData.js';

export default async function seedTestData() {
  try {
    const isThereAlreadyAUser = await User.findOne({});

    if (!isThereAlreadyAUser) {
      const newUser = new User(user);
      await newUser.save();
      // get ids
      // await insertTestWorkouts(newUser);

      console.log(`${newUser.firstName} successfully seeded.`);
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
