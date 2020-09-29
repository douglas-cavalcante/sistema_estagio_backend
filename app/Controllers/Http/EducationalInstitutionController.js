'use strict'

const EducationalInstitution = use('App/Models/EducationalInstitution')

class EducationalInstitutionController {
  async index() {
    const educationalInstitutions = await EducationalInstitution.all();
    return educationalInstitutions;
  }

  async store({ request }) {
    const data = request.only([
      'name',
      'cnpj',
      'contact',
      'cep',
      'address',
      'neighborhood',
      'city',
      'state',
      'number',
      'complement',
    ]);
    const educationalInstitution = await EducationalInstitution.create(data);
    return educationalInstitution;
  }
}

module.exports = EducationalInstitutionController
