'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewColumnsInContractsSchema extends Schema {
  up () {
    this.table('contracts', (table) => {
      table.integer('course_id').notNullable().unsigned().references('id').inTable('courses')
      table.integer('educational_institution_id').notNullable().unsigned().references('id').inTable('educational_institutions')
    })
  }

  down () {
    this.table('contracts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddNewColumnsInContractsSchema
