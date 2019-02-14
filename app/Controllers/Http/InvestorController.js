'use strict'

const Investors = use('App/Models/User')

class InvestorController {
    async index({ view,request, response }) {
        const investors = await Investors
            .query()
            .with('investments')
            .with('kins')
            .fetch()

        return view.render('dashboard.admin.users.investors', {
            investors: investors.toJSON(),
        })
        response.send(investors.toJSON())
    }

    async create({ view }) {
        return view.render('dashboard.admin.users.new_user')
    }
}

module.exports = InvestorController
