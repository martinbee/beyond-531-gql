import { users } from '../../stubData.js';

export default function updateUserLiftOrder(parent, args, context, info) {
  const { input } = args;
  const { id, liftOrder } = input;
  const userToUpdate = users.find((user) => user.id === id);

  if (!userToUpdate) {
    return {
      code: '400',
      message: "Failed to set user's lift order.",
      success: false,
      user: null,
    };
  }

  const updatedUser = {
    ...userToUpdate,
    liftOrder,
  };

  return {
    code: '200',
    message: "Successfully set user's lift order!",
    success: true,
    user: updatedUser,
  };
}
