'use strict'

const Database = use('Database')

class AttendanceReportController {

  async index({ request }) {

    const params = request.get();
    console.log(params)

    const query = Database.table('attendances')
      .select(
        'trainees.name',
        'trainees.cpf',
        'companies.company_name',
        'attendances.type',
        'trainees.primary_phone_contact',
        'attendances.date'
      )
      .innerJoin('trainees', 'trainees.cpf', 'attendances.cpf')
      .innerJoin('contracts', 'contracts.trainee_id', 'trainees.id')
      .innerJoin('companies', 'companies.id', 'contracts.company_id')
      .whereBetween('attendances.date', [params.date_start, params.date_end])

    if (params.type) {
      query.andWhere('attendances.type', params.type)
    }

    if(params.company_id) {
      query.andWhere('companies.id', params.company_id)
    }

    const response = await query;

    return response;
  }

}

module.exports = AttendanceReportController
