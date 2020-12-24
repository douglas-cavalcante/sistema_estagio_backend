'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChecklistSchema extends Schema {
  up () {
    this.create('checklists', (table) => {
      table.increments()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('checklists')
  }
}

module.exports = ChecklistSchema
