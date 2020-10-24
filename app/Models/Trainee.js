'use strict'

const Model = use('Model')
const {differenceInYears} = require('date-fns');

class Trainee extends Model {

  static get computed () {
    return ['age']
  }

  getAge ({ date_birth }) {
    return Number(`${differenceInYears(new Date(), date_birth)}`);
  }

 
  contract () {
    return this.hasOne('App/Models/Contract')
  }

}

module.exports = Trainee
