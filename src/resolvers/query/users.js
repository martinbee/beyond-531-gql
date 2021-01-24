import User from '../../data/models/User.js';

export default async function users(parent, args, context, info) {
  return User.find().populate('history');
}
