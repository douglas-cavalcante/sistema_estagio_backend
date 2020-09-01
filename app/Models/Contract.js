'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contract extends Model {
  company () {
    return this.belongsTo('App/Models/Company')
  }

  trainee () {
    return this.belongsTo('App/Models/Trainee')
  }
}

module.exports = Contract
