'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Investor extends Model {
    investments() {
        return this.hasMany('App/Models/Investment')
    }
    next_of_kins(){
        return this.hasMany('App/Models/Kin')
    }
}

module.exports = Investor
