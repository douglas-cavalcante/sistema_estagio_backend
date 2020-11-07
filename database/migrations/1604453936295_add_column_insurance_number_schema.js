'use strict'

const Schema = use('Schema')

class AddColumnInsuranceNumberSchema extends Schema {
  up () {
    this.table('contracts', (table) => {
      table.string('insurance_number')
    })
  }

  down () {
    this.table('contracts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddColumnInsuranceNumberSchema
