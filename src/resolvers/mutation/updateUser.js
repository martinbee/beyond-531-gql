import User from '../../data/models/User.js';

export default async function updateUser(parent, args, context, info) {
  try {
    const { input } = args;
    const { id, updates } = input;

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!user) {
      return {
        code: '400',
        errorMessage: 'User is null',
        message: 'Failed to update.',
        success: false,
        user: null,
      };
    }

    return {
      code: '200',
      message: 'Successfully updated!',
      success: true,
      user,
    };
  } catch (err) {
    return {
      code: '400',
      errorMessage: err.message,
      message: 'Failed to update.',
      success: false,
      user: null,
    };
  }
}
