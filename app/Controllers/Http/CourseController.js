'use strict'

const Course = use('App/Models/Course')
class CourseController {

  async index() {
    const courses = await Course.all();
    return courses;
  }

  async store({ request }) {
    const data = request.only([
      'name',
    ]);
    const course = await Course.create(data);
    return course;
  }

}

module.exports = CourseController
