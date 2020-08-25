'use strict'

const Observation = use('App/Models/Observation')

class ObservationController {
  async index() {
    const observations = await Observation.all();
    return observations;
  }

  async store({ request }) {
    const data = request.only([
      'description',
      'trainee_id',
    ]);

    const observation = await Observation.create(data);
    return observation;
  }

  async show({ params, response }) {
    try {
      const observation = await Observation.findOrFail(params.id)
      return observation
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Observação não encontrada' } })
    }
  }

  async update({ params, request, response }) {
    try {
      const observation = await Observation.findOrFail(params.id)
      const data = request.only([
        'description',
      ]);

      observation.merge(data)
      observation.save()

      return observation
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Observação nao encontrada' } })
    }
  }
}

module.exports = ObservationController
