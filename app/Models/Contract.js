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

  course () {
    return this.belongsTo('App/Models/Course')
  }

  educationalInstitution () {
    return this.belongsTo('App/Models/EducationalInstitution')
  }
}

module.exports = Contract
