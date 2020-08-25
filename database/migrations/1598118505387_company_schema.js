'use strict'

const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('cnpj',14).notNullable().unique()
      table.string('company_name').notNullable().unique()
      table.string('cep')
      table.string('address')
      table.string('neighborhood')
      table.string('city')
      table.string('state')
      table.string('number')
      table.string('rh_analyst')
      table.string('supervisor')
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
