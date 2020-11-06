'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {

  courseActivities () {
    return this.hasMany('App/Models/CourseActivity')
  }
}

module.exports = Course
