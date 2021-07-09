'use strict'

const Attendance = use('App/Models/Attendance')

class AttendanceManualController {

  async store({ request }) {
    const data = request.only([
      'type',
      'date',
      'cpf'
    ]);
    const attendace = await Attendance.create(data);
    return attendace;
  }



}

module.exports = AttendanceManualController
