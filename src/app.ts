import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app: Application = express()

// Body parser and Core Setup
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  res.send('Hello World')
})

export default app
