import { users } from '../../stubData.js';

export default function updateUserTrainingMaxes(parent, args, context, info) {
  const { input } = args;
  const { id, trainingMaxes } = input;
  const userToUpdate = users.find((user) => user.id === id);

  if (!userToUpdate) {
    return {
      code: '400',
      message: "Failed to set user's training maxes.",
      success: false,
      user: null,
    };
  }

  const updatedUser = {
    ...userToUpdate,
    trainingMaxes,
  };

  return {
    code: '200',
    message: "Successfully set user's training maxes!",
    success: true,
    user: updatedUser,
  };
}
