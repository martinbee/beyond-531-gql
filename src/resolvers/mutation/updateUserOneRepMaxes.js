import { users } from '../../stubData.js';

export default function updateUserOneRepMaxes(parent, args, context, info) {
  const { input } = args;
  const { id, oneRepMaxes } = input;
  const userToUpdate = users.find((user) => user.id === id);

  if (!userToUpdate) {
    return {
      code: '400',
      message: "Failed to set user's one rep maxes.",
      success: false,
      user: null,
    };
  }

  const updatedUser = {
    ...userToUpdate,
    oneRepMaxes,
  };

  return {
    code: '200',
    message: "Successfully set user's one rep maxes!",
    success: true,
    user: updatedUser,
  };
}
