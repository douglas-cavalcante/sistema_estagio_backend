'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewColumnInCompanySchema extends Schema {
  up () {
    this.table('companies', (table) => {
      table.date('agreement_start_date')
    })
  }

  down () {
    this.table('companies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddNewColumnInCompanySchema
