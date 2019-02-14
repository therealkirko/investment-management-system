'use strict'

class DashboardController {
    async index ({ view }) {
        return view.render('dashboard.admin.index')
    }
}

module.exports = DashboardController
