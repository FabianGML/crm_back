import express, { json } from 'express'
import { config } from './config/config.js'
import { Auth } from './models/Auth.js'
import { createAuthRouter } from './routes/authRouter.js'
import { cors } from './middlewares/cors.js'

const createApp = ({ authModel }) => {
  const app = express()
  app.use(json())
  app.use(cors([
    'http://localhost:5173'
  ]))
  app.use('/auth', createAuthRouter({ authModel }))

  app.listen(config.port, () => {
    console.log(`Server listening http://localhost:${config.port}`)
  })
}

createApp({ authModel: Auth })
