import mongoose from 'mongoose'
import config from '../../config'
const database = async () => {
  if (!config.databaseUrl) {
    console.log('Database URL not found')
  } else {
    try {
      await mongoose.connect(config.databaseUrl as string)
      console.log('Database Connected')
    } catch (error) {
      console.log('Database Connected Failed : ', error)
    }
  }
}

export default database
