'use strict'

const Contract = use('App/Models/Contract')

class ActiveContractController {

  async index({ request }) {
    const data = request.get();

    const contractQuery = Contract.query().with('company').with('trainee').where("status", true);
    
    if (data.company_id) {
      contractQuery.where("company_id", data.company_id);
    }
  
    if (data.date_start && data.date_end) {
      contractQuery.whereBetween("start_validity", [data.date_start, data.date_end]);
    }

    const result = await contractQuery.fetch();
    return result;
  }
}

module.exports = ActiveContractController
