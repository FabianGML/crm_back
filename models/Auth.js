import { connection } from '../db/config.js'
import bcrypt from 'bcrypt'
import signToken from '../utils/signToken.js'

export class Auth {
  static async login ({ email, password }) {
    const [user] = await connection.query('SELECT BIN_TO_UUID(id) AS id, password FROM users WHERE email = ?', [email])
    const compare = await bcrypt.compare(password, user[0].password)
    if (!compare) {
      return { error: 'Invalid email or password' }
    }
    const token = signToken(user[0].id, 'service')
    return { id: user[0].id, token }
  }
}
