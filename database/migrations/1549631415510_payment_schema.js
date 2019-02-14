'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.integer('investments_id').references('id').inTable('investments').onDelete('cascade').onUpdate('cascade')
      table.string('refcode')
      table.integer('amount')
      table.string('method')
      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentSchema
