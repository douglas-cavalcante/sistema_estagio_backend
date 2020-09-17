'use strict'

const User = use('App/Models/User');

class SessionController {
  async store ({ request, auth }) {
    const { cpf, password } = request.all()

    const token = await auth.attempt(cpf, password)
    const user = await User.findBy('cpf', cpf);

    return {
      token,
      user: {
        id: user.id,
        name: user.username
      }
    }
  }
}

module.exports = SessionController;