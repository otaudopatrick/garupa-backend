import { PostgresHelper } from '../infra/db/postgres/postgres-helper';
import setupDatabaseModels from '../infra/db/postgres/postgres-models'
import env from './config/env'

(async () => {
  try {
    const postgresHelper = await PostgresHelper.connect(`postgres://${env.dbUser}:${env.dbPassword}@${env.dbUri}:${env.dbPort}/${env.dbName}`)
    setupDatabaseModels(postgresHelper)
    const { setupApp } = await import('./config/app')
    const app = await setupApp()
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  } catch (error) {
    console.error('Error:', error);
  }
  
})()
