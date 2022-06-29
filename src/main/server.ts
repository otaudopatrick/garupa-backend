import env from './config/env'
import { setupApp } from './config/app'

setupApp().then(app => {
  app.listen(env.port, () => { console.log(`Sserver lintening on http://localhost:${env.port}`) })
}).catch(console.error)
