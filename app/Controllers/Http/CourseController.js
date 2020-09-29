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


  async show ({ params, response }) {
    try {
      const course = await Course.findOrFail(params.id)
      return course
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Curso não encontrado' } })
    }
  }


  async update({ params, request, response }) {
    try {
      const course = await Course.findOrFail(params.id)
      const data = request.only([
        'name'
      ]);

      course.merge(data);
      course.save();

      return course
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Curso nao encontrada' } })
    }
  }

}

module.exports = CourseController
