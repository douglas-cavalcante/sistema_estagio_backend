'use strict'
const TraineeDocument = use('App/Models/TraineeDocument')

class TraineeDocumentController {


  async index({ request, response, view }) {
    const query = request.get();

    const result = TraineeDocument.query()
      .with('files')
      .where("trainee_id", query.trainee_id)
      .fetch()

    return result
  }


  async store({ request, response }) {
    const data = request.get();
    const traineeDocument = await TraineeDocument.create(data)
    return traineeDocument;
  }


  async show({ params, request, response, view }) {

  }

  async update({ params, request, response }) {
    
  }


  async destroy({ params, request, response }) {
  }
}

module.exports = TraineeDocumentController
