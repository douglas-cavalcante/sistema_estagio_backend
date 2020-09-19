'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContractSchema extends Schema {
  up () {
    this.create('contracts', (table) => {
      table.increments()
      table.integer('trainee_id').notNullable().unsigned().references('id').inTable('trainees')
      table.integer('company_id').notNullable().unsigned().references('id').inTable('companies')
      table.date('start_validity')
      table.date('end_validity')
      table.float('internship_scholarship_value')
      table.float('transportation_assistance_value')
      table.string('duration')
      table.text('work_activities')
      table.string('reason_shutdown')
      table.date('date_shutdown')
      table.boolean('status').defaultTo(true)
      table.float('integration_agent_value_company')
      table.float('institution_value_company')
      table.timestamps()
    })
  }

  down () {
    this.drop('contracts')
  }
}

module.exports = ContractSchema
