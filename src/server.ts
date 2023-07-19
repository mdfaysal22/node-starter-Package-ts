import app from './app'
import database from './app/utils/database'
import { logger } from './app/utils/logger'
import config from './config'

const server = async () => {
  try {
    await database()
    app.listen(config.port, () => {
      logger.infoLogger.info(`Server running on port ${config.port}`)
    })
  } catch (error) {
    logger.errorLogger.error('Error server Starting')
  }
}

server()
