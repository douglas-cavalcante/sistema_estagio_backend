'use strict'

const Model = use('Model')

class Observation extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }


}

module.exports = Observation
