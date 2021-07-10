'use strict'

const Contract = use('App/Models/Contract')

class FinancialReportController {

  async index({ request }) {
    const data = request.get();

    const contractQueryActives = Contract.query()
      .with('company')
      .with('trainee')
      .where("status", true)


    if (data.company_id) {
      contractQueryActives.where("company_id", data.company_id);
    }

    contractQueryActives.whereBetween("start_validity", [data.date_start, data.date_end]);

    const actives = await contractQueryActives.fetch();

    const contractQueryInactives = Contract.query()
      .with('company')
      .with('trainee')
      .where("status", false)

    if (data.company_id) {
      contractQueryInactives.where("company_id", data.company_id);
    }

    contractQueryInactives.whereBetween("date_shutdown", [data.date_start_end_validity, data.date_end_end_validity]);
    const inactives = await contractQueryInactives.fetch();
    console.log(inactives.toJSON().length)
    return {
      inactivesQtd: inactives.toJSON().length,
      activesQtd: actives.toJSON().length,
      actives,
      inactives,
    };
  }
}

module.exports = FinancialReportController
