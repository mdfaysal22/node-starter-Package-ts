import { Request, Response } from 'express'
import userService from './user.service'

const createUserController = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      data: result,
      message: 'User created successfully!',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}

const getAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers()
    res.status(200).json({
      success: true,
      data: result,
      message: 'User get successfully!',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to get users',
    })
  }
}

export const controller = {
  createUserController,
  getAllUserController,
}
