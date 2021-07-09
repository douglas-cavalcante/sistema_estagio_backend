'use strict'

const Schema = use('Schema')

class AddColumnUserIdInObservationsSchema extends Schema {
  up () {
    this.table('observations', (table) => {
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
    })
  }

}

module.exports = AddColumnUserIdInObservationsSchema
