'use strict'

const Schema = use('Schema')

class TraineeSchema extends Schema {
  up() {
    this.create('trainees', (table) => {
      table.increments()
      table.string('cpf', 11).notNullable().unique()
      table.string('name').notNullable()
      table.string('rg').unique()
      table.string('primary_phone_contact')
      table.string('secondary_phone_contact')
      table.enum('gender', ['M', 'F'])
      table.string('date_birth')
      table.string('cep')
      table.string('address')
      table.string('neighborhood')
      table.string('city')
      table.string('state')
      table.string('number')
      table.string('complement')
      table.string('father_name')
      table.string('mother_name')
      table.boolean('has_eficiency').defaultTo(false)
      table.string('admission_date')
      table.timestamps()
    })
  }

  down() {
    this.drop('trainees')
  }
}

module.exports = TraineeSchema
