'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KinSchema extends Schema {
  up () {
    this.create('kins', (table) => {
      table.increments()
      table.integer('investors_id').references('id').inTable('investors').onDelete('cascade').onUpdate('cascade')
      table.string('firstname')
      table.string('middlename')
      table.string('lastname')
      table.string('phone')
      table.string('email')
      table.string('passport')
      table.timestamps()
    })
  }

  down () {
    this.drop('kins')
  }
}

module.exports = KinSchema
