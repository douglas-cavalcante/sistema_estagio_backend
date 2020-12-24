'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChecklistTraineeSchema extends Schema {
  up () {
    this.create('checklist_trainees', (table) => {
      table.increments()
      table.integer('checklist_id').notNullable().unsigned().references('id').inTable('checklists')
      table.integer('trainee_id').notNullable().unsigned().references('id').inTable('trainees')
      table.boolean('status').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('checklist_trainees')
  }
}

module.exports = ChecklistTraineeSchema
