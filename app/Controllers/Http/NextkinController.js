'use strict'

class NextkinController {
    async index({ view }) {
        return view.render('dashboard.admin.users.kin')
    }
}

module.exports = NextkinController
