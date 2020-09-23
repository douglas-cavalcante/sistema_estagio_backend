'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddEmailInTraineesSchema extends Schema {
  up () {
    this.table('trainees', (table) => {
      table.string('email')
    })
  }

  down () {
    this.table('trainees', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddEmailInTraineesSchema
