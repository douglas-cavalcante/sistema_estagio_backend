'use strict'

const Checklist = use('App/Models/Checklist');
const ChecklistTrainee = use('App/Models/ChecklistTrainee');


class ChecklistTraineeController {

  async index({ request }) {
    const data = request.get();

    const checklist = await ChecklistTrainee
      .query()
      .where('trainee_id', data.trainee_id)
      .with('checklist')
      .fetch();

    return checklist;
  }


  async store({ request }) {
    const data = request.body;

    const checkListData = await Checklist.query().fetch();

    const checklistTraineeData = checkListData.toJSON().map(item => {
      return {
        checklist_id: item.id,
        trainee_id: data.trainee_id
      }
    })

    const checklistTrainee = await ChecklistTrainee.createMany(checklistTraineeData);

    return checklistTrainee;
  }



  async update({ params, response }) {
    try {
      const checklistTrainee = await ChecklistTrainee.findOrFail(params.id);
      
      checklistTrainee.merge({status: !checklistTrainee.status});
      checklistTrainee.save();

      return checklistTrainee;
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Nao encontrada' } })
    }
  }

}

module.exports = ChecklistTraineeController
