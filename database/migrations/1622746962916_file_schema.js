'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TraineeDocumentSchema extends Schema {
  up () {
    this.create('trainee_documents', (table) => {
      table.increments()
      table.integer('trainee_id').notNullable().unsigned().references('id').inTable('trainees')
      table.integer('file_id').notNullable().unsigned().references('id').inTable('files')
      table.timestamps()
    })
  }

  down () {
    this.drop('trainee_documents')
  }
}

module.exports = TraineeDocumentSchema
