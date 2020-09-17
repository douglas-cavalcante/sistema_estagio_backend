'use strict'

const User = use('App/Models/User');

class UserController {
 
  async store({ request }) {
    const data = request.only([
      'username',
      'email',
      'password',
      'cpf'
    ]);

    const user = await User.create(data);
  
    return user;
  }
}

module.exports = UserController
