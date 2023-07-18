import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user)
  if (createUser) {
    return createUser
  } else {
    throw new Error('Error creating user')
  }
}

export default {
  createUser,
}
