'use strict'

const User = use(('App/Models/User'))
const Investor = use('App/Models/Investor')
const NextKin = use('App/Models/Kin')
const Investment = use('App/Models/Investment')
const Payment = use('App/Models/Payment')

const randomString = require('random-string')


class UniversalController {

    async create({ response, request, session }){

        /*=======================================================
            This @universal section adds new investor
        =======================================================*/
        const user = new User()

        const user_id = randomString({
            length: 5,
            numeric: true,
            letters: false,
            special: false
        })

        /*=======================================================
            This @universal section adds new investor
        =======================================================*/
        const investor = new Investor()

        investor.id = user_id
        investor.firstname = request.input('fname')
        investor.middlename = request.input('mname')
        investor.lastname = request.input('lname')
        investor.email = request.input('email')
        investor.passport = request.input('passport')
        investor.phone = request.input('phone')

        await investor.save()

        
        /*=======================================================
            This @universal section adds multiple next of kins
        =======================================================*/

        var firstname = request.input('firstname')
        var middlename = request.input('middlename')
        var lastname = request.input('lastname')
        var email = request.input('mail')
        var passport_id = request.input('idno')
        var phone = request.input('phoneno')

        for (let index = 0; index < firstname.length; index++) {

            const kin = new NextKin()

            kin.investors_id = user_id
            kin.firstname = firstname[index]
            kin.middlename = middlename[index]
            kin.lastname = lastname[index]
            kin.email = email[index]
            kin.passport = passport_id[index]
            kin.phone = phone[index]
            
            await kin.save()
        }

        /*================================================================
            This @universal section adds new investment
        ================================================================*/

        const investment_id = randomString({
            length: 6,
            numeric: true,
            letters: false,
            special: false
        })

        const investor_id = user_id

        const investment = new Investment()
        const investment2 = new Investment()

        const type = request.input('invtype')

        if (type == 'combo'){
            investment.id = investment_id
            investment.id = request.input('fnumber')
            investment.investors_id = investor_id
            investment.type = 'trees'
            investment.capital = request.input('capital')
            investment.investment_date = request.input('date')
            investment.number_of_investments = request.input('investmentno')
            investment.size = request.input('investmentsize')
            investment.unit_price = request.input('unitprice')
            
            await investment.save()

            investment2.id = investment_id
            investment2.fileno = request.input('fnumber')
            investment2.investors_id = investor_id
            investment2.type = 'fruits'
            investment2.capital = request.input('capital')
            investment2.investment_date = request.input('date')
            investment2.number_of_investments = request.input('investmentno')
            investment2.size = request.input('investmentsize')
            investment2.unit_price = request.input('unitprice')
            
            await investment2.save()

        }else{
            investment.id = investment_id
            investment.fileno = request.input('fnumber')
            investment.investors_id = investor_id
            investment.type = 'trees'
            investment.capital = request.input('capital')
            investment.investment_date = request.input('date')
            investment.number_of_investments = request.input('investmentno')
            investment.size = request.input('investmentsize')
            investment.unit_price = request.input('unitprice')

            await investment.save()
        }

        /*===========================================================
            This @universal section adds new multiple payment method
        ===========================================================*/
        
        var method =  request.input('method')
        var reference_code =  request.input('reference_code')
        var amount =  request.input('amount')
        
        for (let index = 0; index < amount.length; index++) {

            const payment_tbl= new Payment
            payment_tbl.investments_id  = investment_id
            payment_tbl.method= method[index]
            payment_tbl.refcode= reference_code[index]
            payment_tbl.amount= amount[index]
            
            await payment_tbl.save()
        }
        
        return response.redirect('/users/investors')
    }
}

module.exports = UniversalController
