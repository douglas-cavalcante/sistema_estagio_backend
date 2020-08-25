'use strict'

const Route = use('Route')

Route.get('/trainees', 'TraineeController.index')
Route.get('/trainees/:id', 'TraineeController.show')
Route.post('/trainees', 'TraineeController.store')
Route.put('/trainees/:id', 'TraineeController.update')

Route.get('/companies', 'CompanyController.index')
Route.get('/companies/:id', 'CompanyController.show')
Route.post('/companies', 'CompanyController.store')
Route.put('/companies/:id', 'CompanyController.update')

Route.get('/observations', 'ObservationController.index')
Route.get('/observations/:id', 'ObservationController.show')
Route.post('/observations', 'ObservationController.store')
Route.put('/observations/:id', 'ObservationController.update')
