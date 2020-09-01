'use strict'

const Company = use('App/Models/Company')


class CompanyController {
  async index() {
    const companies = await Company.all();
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
       'supervisor'

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
        'cep',
        'address',
        'neighborhood',
        'city',
        'state',
        'number',
        'complement'
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
