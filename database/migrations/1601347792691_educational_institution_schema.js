'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EducationalInstitutionSchema extends Schema {
  up () {
    this.create('educational_institutions', (table) => {
      table.increments()
      table.string('name')
      table.string('cnpj')
      table.string('contact')
      table.string('cep')
      table.string('address')
      table.string('neighborhood')
      table.string('city')
      table.string('state')
      table.string('number')
      table.string('complement')
      table.timestamps()
    })
  }

  down () {
    this.drop('educational_institutions')
  }
}

module.exports = EducationalInstitutionSchema
