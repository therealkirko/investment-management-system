'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('auth/index')
Route.on('/register').render('auth/register')

Route.post('/signup', 'Auth/AuthController.create').as('signup')
Route.post('/signin', 'Auth/AuthController.signin').as('signin')

Route.post('/new_user', 'UniversalController.create').as('/new_user')

Route
    .get('/dashboard', 'DashboardController.index')
    .as('dashboard')
Route
    .get('/users/investors', 'InvestorController.index')
    .as('/users/investors')

Route
    .get('/users', 'UserController.index')
    .as('/users')

// Route.on('/investments/').render('dashboard/admin/investment/index')
Route.get('/investments/', 'InvestmentController.index').as('/investments')

// Route.get('/AllInvestment', 'InvestorController.index').as('/AllInvestment')

Route
    .get('/users/new_investor', 'InvestorController.create')
    .as('/users/new_investor')

Route
    .get('/users/next_of_kin', 'NextkinController.index')
    .as('/users/next_of_kin')

Route
    .get('/new_investment', 'InvestmentController.create')
    .as('new_investment')

Route 
    .get('/returns/trees', 'ReturnController.trees')
    .as('/returns/trees')

Route 
    .get('/returns/fruits', 'ReturnController.fruits')
    .as('/returns/fruits')