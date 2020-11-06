'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const { differenceInCalendarDays, isPast, isFuture } = require('date-fns')
class Contract extends Model {

  static get computed() {
    return ['numberDaysEndContract']
  }

  getNumberDaysEndContract({ end_validity, }) {
    const numberDaysEndContract = differenceInCalendarDays(end_validity, new Date());
    
    console.log(numberDaysEndContract)
    return numberDaysEndContract
  }

  company() {
    return this.belongsTo('App/Models/Company')
  }

  trainee() {
    return this.belongsTo('App/Models/Trainee')
  }

  course() {
    return this.belongsTo('App/Models/Course')
  }

  educational_institution() {
    return this.belongsTo('App/Models/EducationalInstitution')
  }
}

module.exports = Contract
