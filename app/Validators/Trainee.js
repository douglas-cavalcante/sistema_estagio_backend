'use strict'

const Antl = use('Antl')

class Trainee {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      cpf: 'required|unique:trainees|min:11|max:11',
      name: 'required',
      rg: 'unique:trainees',
      sexo: 'in:M,F',
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Trainee