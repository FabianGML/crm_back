import { Router } from 'express'
import { AuthController } from '../controllers/AuthController.js'
import validateSchema from '../middlewares/validateSchema.js'
import { loginSchema } from '../schemas/user.schema.js'

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()
  const authController = new AuthController({ authModel })
  authRouter.post('/login',
    validateSchema(loginSchema, 'body'),
    authController.login)
  return authRouter
}
