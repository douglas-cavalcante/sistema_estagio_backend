'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewFieldsInContractSchema extends Schema {
  up () {
    this.table('contracts', (table) => {
      table.float('integration_agent_value')
      table.float('institution_value_company')
    })
  }

  down () {
    this.table('contracts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddNewFieldsInContractSchema
