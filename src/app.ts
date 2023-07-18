import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './app/modules/user/user.routers'
const app: Application = express()

// Body parser and Core Setup
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Router --
app.use('/api/v2/user/', userRouter)

// Default Router for Testing --
app.get('/', async (req, res) => {
  res.send('Hello World')
})

export default app
