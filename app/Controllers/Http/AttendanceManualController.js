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

  async update({ request, params, response }) {

    try {
      const data = request.only(['type']);
      const attendace = await Attendance.find(params.id)
      attendace.merge(data);
      await attendace.save();
      return attendace

    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Registro nao encontrado' } })
    }

  }
}

module.exports = AttendanceManualController
