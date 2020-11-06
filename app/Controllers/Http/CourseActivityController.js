'use strict'

const CourseActivity = use('App/Models/CourseActivity');

class CourseActivityController {

  async index({request}){
    const data = request.get();
    const activities = CourseActivity.query().where('course_id', data.course_id).fetch();
    return activities;
  }

  async store({ request }) {
    const data = request.only([
      'description',
      'course_id'
    ]);

    const courseActivity = await CourseActivity.create(data);
    return courseActivity;
  }
}

module.exports = CourseActivityController
