'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TraineeDocument extends Model {

  trainee() {
    return this.belongsTo('App/Models/Trainee')
  }

  files() {
    return this.belongsTo('App/Models/File')
  }

}



module.exports = TraineeDocument
