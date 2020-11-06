'use strict'

const Contract = use('App/Models/Contract')
const { format} = require('date-fns');

class ContractExpirationReport {
  async index() {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const result = await Contract
    .query()
    .with('company')
    .with('trainee')
    .with('course')
    .with('educational_institution')
    .whereRaw("(end_validity - ?) <= 15", [currentDate])
    .where('status', true)
    .fetch();
    return result;
  }

}

module.exports = ContractExpirationReport
