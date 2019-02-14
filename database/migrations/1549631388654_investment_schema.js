'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestmentSchema extends Schema {
  up () {
    this.create('investments', (table) => {
      table.integer('id').index().unique()
      table.string('fileno')
      table.integer('investors_id').references('id').inTable('investors').onDelete('cascade').onUpdate('cascade')
      table.integer('capital')
      table.integer('number_of_investments')
      table.date('investment_date')
      table.string('type')
      table.string('size')
      table.integer('unit_price')
      table.string('investment_period')
      table.timestamps()
    })
  }

  down () {
    this.drop('investments')
  }
}

module.exports = InvestmentSchema
