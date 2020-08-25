'use strict'
const Schema = use('Schema')

class ObservationSchema extends Schema {
  up () {
    this.create('observations', (table) => {
      table.increments()
      table.integer('trainee_id').notNullable().unsigned().references('id').inTable('trainees')
      table.text('description')
      table.timestamps()
    })
  }l

  down () {
    this.drop('observations')
  }
}

module.exports = ObservationSchema
