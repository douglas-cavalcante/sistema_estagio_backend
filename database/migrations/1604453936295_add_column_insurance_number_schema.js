'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnInsuranceNumberSchema extends Schema {
  up () {
    this.table('trainees', (table) => {
      table.string('insurance_number')
    })
  }

  down () {
    this.table('trainees', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddColumnInsuranceNumberSchema
