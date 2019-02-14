'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')
const randomString = require('random-string')

class AuthController {
    showLoginForm({ view }) {
        return view.render('auth.index')
    }

    async signin({ request, auth, response }) {
        const { email, password } = request.only(['email', 'password'])
        try {
            if (await auth.attempt(email, password)) {
                
                let user = await User.findBy('email', email)
                let token = await auth.generate(user)

                Object.assign(user, token)
                return response.redirect('/dashboard')
            }
            // let user = await auth.attempt(email, password);
            

        }
        catch (e) {
            console.log(e)
            return response.json({ message: 'You are not registered!' })
        }
    }

    async create({ request, session, response }) {
        const rules = {
            email: 'required|email|unique:users,email',
            password: 'required'
        }

        const messages = {
            'email.required': 'You must provide a valid email address.',
            'email.email': 'You must provide a valid email address.',
            'email.unique': 'This email is already registered.',
            'password.required': 'You must provide a password'
        }

        const validation = await validate(request.all(), rules, messages)

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])

            return response.redirect('back')
        }

        const user = await User.create({
            email: request.input('email'),
            password: request.input('password'),
            confirmation_token: randomString({ length: 40 })
        })

        return response.redirect('/')
    }
}

module.exports = AuthController
