'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReturnSchema extends Schema {
  up () {
    this.create('returns', (table) => {
      table.increments()
      table.integer('investments_id').references('id').inTable('investments').onDelete('cascade').onUpdate('cascade')
      table.string('month')
      table.string('year')
      table.integer('amount')
      table.integer('status', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('returns')
  }
}

module.exports = ReturnSchema
