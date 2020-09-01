'use strict'

const Contract = use('App/Models/Contract')

class ContractController {

  async index() {
    const contracts = await Contract.query().with('company').with('trainee').fetch();
    return contracts;
  }

  async store({ request }) {
    const data = request.only([
      'trainee_id',
      'company_id',
      'start_validity',
      'end_validity',
      'internship_scholarship_value',
      'transportation_assistance_value',
      'duration',
      'work_activities',
    ])

    const contract = await Contract.create(data);

    return contract;
  }

  async show({ params, request, response, view }) {
  }


  async update({ params, request, response }) {
  }

  async shutdown({ params, request, response }) {
    try {
      const contract = await Contract.findOrFail(params.id)
      const data = request.only([
        'reason_shutdown',
        'date_shutdown',
      ]);

      data.status = false;

      contract.merge(data)
      contract.save()

      return contract
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Contrato nao encontrado' } })
    }
  }
}

module.exports = ContractController
