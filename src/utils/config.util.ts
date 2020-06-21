require('dotenv').config()

const { HTTP_PORT, WS_PORT } = process.env

export default class ConfigUtils {
  static get HTTP_PORT(): number {
    return HTTP_PORT ? parseInt(HTTP_PORT) : 3000
  }

  static get WS_PORT(): number {
    return WS_PORT ? parseInt(WS_PORT) : 3000
  }
}
