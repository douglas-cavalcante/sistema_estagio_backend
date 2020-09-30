'use strict'

const Contract = use('App/Models/Contract')
const Company = use('App/Models/Company')
const Trainee = use('App/Models/Trainee')

class DashboardController {

  async index({ request }) {
    const data = request.get();

    const total_trainees = await Trainee
    .query()
    .getCount();

    const total_companies = await Company
    .query()
    .getCount();


    const total_contracts = await Contract
    .query()
    .where('status',true)
    .getCount();


    const shutdown_contracts = await Contract
    .query()
    .whereRaw("EXTRACT(month from date_shutdown) = ? AND EXTRACT(year from date_shutdown) = ?", [data.month, data.year])
    .where('status',false)
    .getCount();

    const actives_contracts = await Contract
    .query()
    .whereRaw("EXTRACT(month from start_validity) = ? AND EXTRACT(year from start_validity) = ?", [data.month, data.year])
    .where('status',true)
    .getCount();


    return {
      total_contracts,
      shutdown_contracts,
      actives_contracts,
      total_trainees,
      total_companies
    };
  }

 
}

module.exports = DashboardController
