'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestorSchema extends Schema {
  up () {
    this.create('investors', (table) => {
      table.integer('id').unique().index()
      table.string('firstname')
      table.string('middlename')
      table.string('lastname')
      table.string('phone')
      table.string('email')
      table.string('passport')
      table.string('password')
      table.timestamps()
    })
  }

  down () {
    this.drop('investors')
  }
}

module.exports = InvestorSchema
