'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Return extends Model {
    investments(){
        return this.belongsTo('App/Models/Investment')
    }
}

module.exports = Return
