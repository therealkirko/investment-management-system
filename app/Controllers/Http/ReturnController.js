'use strict'

class ReturnController {
    async fruits({ view }){
        return view.render('dashboard.admin.returns.fruits')
    }

    async trees({ view }){
        return view.render('dashboard.admin.returns.trees')
    }
}

module.exports = ReturnController
