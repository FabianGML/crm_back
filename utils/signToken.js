import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'

export default function signToken (id, role) {
  return jwt.sign({ id, role }, config.jwtKey)
}
