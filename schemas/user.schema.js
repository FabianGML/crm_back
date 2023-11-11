import Joi from 'joi'

const email = Joi.string().email().required()
const password = Joi.string().min(8)
const businessEntity = Joi.string().valid('service', 'sales').required()

export const loginSchema = Joi.object({
  email,
  password: password.required(),
  businessEntity
})
