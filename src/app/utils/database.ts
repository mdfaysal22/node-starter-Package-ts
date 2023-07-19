import mongoose from 'mongoose'
import config from '../../config'
import { logger } from './logger'
const database = async () => {
  if (!config.databaseUrl) {
    logger.errorLogger.error('Database URL not found')
  } else {
    try {
      await mongoose.connect(config.databaseUrl as string)
      logger.infoLogger.info('Database Connected')
    } catch (error) {
      logger.errorLogger.error('Database Connected Failed : ', error)
    }
  }
}

export default database
