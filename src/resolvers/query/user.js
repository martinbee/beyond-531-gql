import User from '../../data/models/User.js';

export default async function user(parent, args, context, info) {
  return User.findById(args.id).populate('history');
}
