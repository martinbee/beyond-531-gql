import { users } from '../../stubData.js'

export default function updateUserWeek(parent, args, context, info) {
  const { input } = args
  const {
    id,
    week,
  } = input
  const userToUpdate = users.find((user) => user.id === id)

  if (!userToUpdate) {
    return {
      code: '400',
      message: "Failed to set user's workout week.",
      success: false,
      user: null,
    }
  }

  const updatedUser = {
    ...userToUpdate,
    week: input.week,
  }

  return {
    code: '200',
    message: "Successfully set user's workout week!",
    success: true,
    user: updatedUser,
  }
}