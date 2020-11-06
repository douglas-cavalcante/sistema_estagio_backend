'use strict'

const Company = use('App/Models/Company')


class CompanyController {
  async index() {
    const companies = await Company
    .query()
    .withCount('contracts as qtd_contracts_actives', (builder) => {
      builder.where('status', true)
    })
    .fetch();

    return companies;
  }

  async store({ request }) {
    const data = request.only([
      'cnpj',
      'company_name',
      'contact',
      'cep',
      'address',
      'neighborhood',
      'city',
      'state',
      'number',
      'complement',
      'rh_analyst',
      'supervisor',
      'integration_agent_value',
      'institution_value',
      'agreement_start_date'
    ]);

    const company = await Company.create(data);
    return company;
  }

  async show({ params, response }) {
    try {
      const company = await Company.findOrFail(params.id)
      return company
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Empresa não encontrada' } })
    }
  }

  async update({ params, request, response }) {
    try {
      const company = await Company.findOrFail(params.id)
      const data = request.only([
        'cnpj',
        'company_name',
        'contact',
        'cep',
        'address',
        'neighborhood',
        'city',
        'state',
        'number',
        'complement',
        'rh_analyst',
        'supervisor',
        'integration_agent_value',
        'institution_value',
        'agreement_start_date'
      ]);

      company.merge(data)
      company.save()

      return company
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Empresa nao encontrada' } })
    }
  }
}

module.exports = CompanyController
