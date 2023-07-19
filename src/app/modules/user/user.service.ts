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

const getUsers = async (): Promise<IUser[] | null> => {
  const users = await User.find({})
  if (users) {
    return users
  } else {
    return null
  }
}

export default {
  createUser,
  getUsers,
}
