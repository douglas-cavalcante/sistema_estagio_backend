'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store');
Route.post('/sessions', 'SessionController.store');

Route.get('/trainees', 'TraineeController.index');
Route.get('/trainees/:id', 'TraineeController.show');
Route.post('/trainees', 'TraineeController.store');
Route.put('/trainees/:id', 'TraineeController.update');

Route.get('/companies', 'CompanyController.index');
Route.get('/companies/:id', 'CompanyController.show');
Route.post('/companies', 'CompanyController.store');
Route.put('/companies/:id', 'CompanyController.update');

Route.get('/observations', 'ObservationController.index');
Route.get('/observations/:id', 'ObservationController.show');
Route.post('/observations', 'ObservationController.store');
Route.put('/observations/:id', 'ObservationController.update');


Route.post('/contracts', 'ContractController.store');
Route.get('/contracts', 'ContractController.index');

Route.put('/contracts/:id/shutdown', 'ContractController.shutdown');

Route.get('/dashboard', 'DashboardController.index');

Route.get('/reports/actives', 'ActiveContractController.index');
Route.get('/reports/inactives', 'InactiveContractController.index');



