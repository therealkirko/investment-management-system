'use strict'

class UserController {
    async index({ view }) {
        return view.render('dashboard.admin.users.index')
    }

    async create({}) {

    }

    async store({}) {
        
    }
}

module.exports = UserController
