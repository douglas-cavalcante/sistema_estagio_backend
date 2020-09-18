'use strict'

const Model = use('Model')

class Trainee extends Model {

  contract () {
    return this.hasOne('App/Models/Contract')
  }

}

module.exports = Trainee
