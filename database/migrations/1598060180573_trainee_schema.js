'use strict'

const Schema = use('Schema')

class TraineeSchema extends Schema {
  up() {
    this.create('trainees', (table) => {
      table.increments()
      table.string('cpf').notNullable().unique()
      table.string('name').notNullable()
      table.string('rg')
      table.string('primary_phone_contact')
      table.string('secondary_phone_contact')
      table.enum('gender', ['M', 'F'])
      table.date('date_birth')
      table.string('cep')
      table.string('address')
      table.string('neighborhood')
      table.string('city')
      table.string('state')
      table.string('number')
      table.string('complement')
      table.string('father_name')
      table.string('mother_name')
      table.boolean('have_special_needs').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('trainees')
  }
}

module.exports = TraineeSchema
