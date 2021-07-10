'use strict'

const Helpers = use('Helpers')

let csvToJson = require('convert-csv-to-json');

const Trainee = use('App/Models/Trainee')
const Attendance = use('App/Models/Attendance')

const groupBy = (key) => {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
}

class AttendanceController {


  async index({ request, response }) {

    const params = request.get();

    const data = await Attendance.query().where('cpf', params.cpf).fetch()

    return data
  }


  async store({ request, response }) {

    try {
      const file = request.file('file')

      await file.move(Helpers.tmpPath('uploads'), {
        name: 'presencas-file.csv',
        overwrite: true
      })

      if (!file.moved()) {
        return file.error()
      }

      let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(Helpers.tmpPath('/uploads/presencas-file.csv'));

      const parseJSON = json.map(item => {

        const values = Object.values(item)

        return {
          cpf: values[1].replace(/\D/g, ''),
          date: new Date(values[4].replace(/"/g, '').substring(0, 10))
        }
      })

      const filterJSON = parseJSON.filter(item => item.cpf.length === 11 && item.date)

      const groupDocument = groupBy('cpf');

      const data = groupDocument(filterJSON);

      const keys = Object.keys(data);

      keys.forEach(async key => {
        const currentData = data[key];
        const ordenedItems = currentData.slice().sort((a, b) => b.date - a.date)
        console.log(ordenedItems)
        await Attendance.findOrCreate({
          cpf: ordenedItems[0].cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
          date: ordenedItems[0].date
        });
      });
    } catch (error) {
      return response
        .status(error.status)
        .send(error)
    }
  }

}


module.exports = AttendanceController
