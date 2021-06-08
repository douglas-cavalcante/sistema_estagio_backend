'use strict'
const TraineeDocument = use('App/Models/TraineeDocument')

class TraineeDocumentController {
  async index({ request }) {
    const query = request.get();

    const result = TraineeDocument.query()
      .with('files')
      .where("trainee_id", query.trainee_id)
      .orderBy('created_at', 'desc')
      .fetch()

    return result
  }
}

module.exports = TraineeDocumentController
