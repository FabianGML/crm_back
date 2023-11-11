export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  // Login method
  login = async (req, res) => {
    const { email, password } = req.body
    const result = await this.authModel.login({ email, password })
    res.json(result)
  }
}
