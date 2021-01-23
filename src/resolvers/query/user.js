import { users } from '../../stubData.js'

export default function user(parent, args, context, info) {
  return users.find(({ id }) => args.id === id)
} 