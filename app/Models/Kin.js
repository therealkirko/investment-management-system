'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Kin extends Model {
    investors() {
        return this.belongsTo('App/Models/Investor')
    }
}

module.exports = Kin
