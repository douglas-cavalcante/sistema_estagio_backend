'use strict'

const Trainee = use('App/Models/Trainee')

class TraineeController {

  async index() {
    const trainees = await Trainee.query().fetch();
    return trainees;
  }

  async store({ request }) {
    const data = request.only([
      'cpf',
      'name',
      'rg',
      'primary_phone_contact',
      'secondary_phone_contact',
      'gender',
      'date_birth',
      'cep',
      'address',
      'neighborhood',
      'city',
      'state',
      'number',
      'complement',
      'father_name',
      'mother_name',
      'has_eficiency',
      'admission_date',
    ]);

    const trainee = await Trainee.create(data);
    return trainee;
  }

  async show ({ params, response }) {
    try {
      const trainee = await Trainee.findOrFail(params.id)
      return trainee
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Estágiario não encontrado' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const trainee = await Trainee.findOrFail(params.id)
      const data = request.only([
        'cpf',
        'name',
        'rg',
        'primary_phone_contact',
        'secondary_phone_contact',
        'gender',
        'date_birth',
        'cep',
        'address',
        'neighborhood',
        'city',
        'state',
        'number',
        'complement',
        'father_name',
        'mother_name',
        'have_special_needs',
        'admission_date',
      ]);

      trainee.merge(data)
      trainee.save()

      return trainee
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Estagiário nao encontrado' } })
    }
  }
}

module.exports = TraineeController
