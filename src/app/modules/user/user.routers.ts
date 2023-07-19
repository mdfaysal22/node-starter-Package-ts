import express from 'express'
import { controller } from './user.controller'

const userRouter = express.Router()

userRouter.post('/createUser', controller.createUserController)
userRouter.get('/users', controller.getAllUserController)

export default userRouter
