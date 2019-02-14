'use strict'

const Investment = use('App/Models/Investment')

class InvestmentController {
  async index({ response,request, view }) {

    const investments = await Investment
      .query()
      .with('investors')
      .with('payments')
      .with('returns')
      .fetch()

      return view.render('dashboard.admin.investment.index', {
        investments: investments.toJSON(),
      })
      // response.send(investments.toJSON())
  }

  async create({ view }) {

    return view.render('dashboard.admin.new_investment')
  }
}

module.exports = InvestmentController
