'use strict'

const Contract = use('App/Models/Contract')
const Company = use('App/Models/Company')

class ContractController {

  async index({ request }) {
    const data = request.get();

    const contractQuery = Contract
    .query()
    .with('company')
    .with('trainee')
    .with('course')
    .with('educational_institution');

    if (data.trainee_id) {
      contractQuery.where("trainee_id", data.trainee_id);
    }

    if (data.company_id) {
      contractQuery.where("company_id", data.company_id);
    }

    if (data.status) {
      contractQuery.where("status", data.status) ;
    }

    if (data.date_start && data.date_end) {
      contractQuery.whereBetween("start_validity", [data.date_start, data.date_end]);
    }

    const result = await contractQuery.fetch();
    return result;
  }

  async store({ request }) {
    const data = request.only([
      'trainee_id',
      'company_id',
      'start_validity',
      'end_validity',
      'insurance_number',
      'internship_scholarship_value',
      'transportation_assistance_value',
      'duration',
      'work_activities',
      'educational_institution_id',
      'course_id',
    ])

    const company = await Company.findOrFail(data.company_id);

    const contract = await Contract.create({
      integration_agent_value_company: company.integration_agent_value,
      institution_value_company: company.institution_value,
      ...data,
    });

    return contract;
  }

  async show({ params, response }) {
    try {
      const contract = await Contract
        .query()
        .with('company')
        .with('trainee')
        .with('course')
        .with('educational_institution')
        .where('id', params.id)
        .firstOrFail();
      return contract
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Contrato não encontrado' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const contract = await Contract.findOrFail(params.id)
      const data = request.only([
        'trainee_id',
        'company_id',
        'start_validity',
        'end_validity',
        'insurance_number',
        'internship_scholarship_value',
        'transportation_assistance_value',
        'duration',
        'work_activities',
        'educational_institution_id',
        'course_id',
      ]);

      contract.merge(data)
      contract.save()

      return contract
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Contrato nao encontrado' } })
    }
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


  async reactive({ params, request, response }) {
    try {
      const contract = await Contract.findOrFail(params.id)

      const data = {
        status: true,
        reason_shutdown: '',
        date_shutdown: null,

      };

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
