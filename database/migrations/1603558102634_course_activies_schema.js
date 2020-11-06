'use strict'

const Schema = use('Schema')

class CourseActiviesSchema extends Schema {
  up () {
    this.create('course_activities', (table) => {
      table.increments()
      table.integer('course_id').notNullable().unsigned().references('id').inTable('courses')
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('course_activities')
  }
}

module.exports = CourseActiviesSchema
