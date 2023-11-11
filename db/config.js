import { config } from './../config/config.js'
import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection(config.dbUrl)
