import { connection } from '../db/config.js'
import bcrypt from 'bcrypt'
import signToken from '../utils/signToken.js'

export class Auth {
  static async login ({ email, password }) {
    const [user] = await connection.query('SELECT BIN_TO_UUID(id) AS id, password  FROM users WHERE email = ?', [email])
    const compare = await bcrypt.compare(password, user[0].password)
    const menus = {}
    if (!compare) {
      return { error: 'Invalid email or password' }
    }
    const [menuOptions] = await connection.query(
      `
      SELECT 
        options.name AS options_name, 
        options.url,
        menu.name AS menu_id 
      FROM access
      JOIN options ON options.id = option_id
      JOIN menu ON menu.id = menu_id
      WHERE user_id = UUID_TO_BIN(?)
      `, [user[0].id])
    menuOptions.forEach(option => {
      if (!menus[option.menu_id]) menus[option.menu_id] = []
      menus[option.menu_id].push({ name: option.options_name, url: option.url })
    })
    const token = signToken(user[0].id, 'service')
    return { id: user[0].id, token, menus }
  }
}
