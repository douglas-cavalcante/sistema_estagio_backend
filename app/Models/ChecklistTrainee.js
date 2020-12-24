'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChecklistTrainee extends Model {

  checklist () {
    return this.belongsTo('App/Models/Checklist')
  }

}

module.exports = ChecklistTrainee
