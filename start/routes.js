'use strict';

const Route = use('Route');

/* Rotas públicas */
Route.post('/users', 'UserController.store');

Route.post('/sessions', 'SessionController.store');
Route.post('/trainees', 'TraineeController.store');

Route.get('/courses', 'CourseController.index');
Route.post('/courses', 'CourseController.store');
Route.get('/courses/:id', 'CourseController.show');
Route.put('/courses/:id', 'CourseController.update');

Route.get('/educational_institutions', 'EducationalInstitutionController.index');
Route.post('/educational_institutions', 'EducationalInstitutionController.store');

/* Rotas privadas */


Route.post('/files', 'FileController.store')

Route.group(() => {


  Route.get('/files/:id', 'FileController.show')

  Route.get('/trainees/documents', 'TraineeDocumentController.index');

  Route.get('/trainees/attendance', 'AttendanceController.index')
  Route.post('/trainees/attendance', 'AttendanceController.store')
  Route.post('/trainees/attendanceManual', 'AttendanceManualController.store')

  Route.get('/dashboard', 'DashboardController.index');
  Route.get('/trainees', 'TraineeController.index');
  Route.get('/trainees/:id', 'TraineeController.show');
  Route.put('/trainees/:id', 'TraineeController.update');

  Route.get('/companies', 'CompanyController.index');
  Route.get('/companies/:id', 'CompanyController.show');
  Route.post('/companies', 'CompanyController.store');
  Route.put('/companies/:id', 'CompanyController.update');

  Route.get('/observations', 'ObservationController.index');
  Route.get('/observations/:id', 'ObservationController.show');
  Route.post('/observations', 'ObservationController.store');
  Route.put('/observations/:id', 'ObservationController.update');

  Route.get('/contractExpirationReport', 'ContractExpirationReport.index');

  Route.get('/checklistTrainee', 'ChecklistTraineeController.index');
  Route.post('/checklistTrainee', 'ChecklistTraineeController.store');
  Route.put('/checklistTrainee/:id', 'ChecklistTraineeController.update');



  Route.get('/contracts', 'ContractController.index');
  Route.get('/contracts/:id', 'ContractController.show');
  Route.post('/contracts', 'ContractController.store');
  Route.put('/contracts/:id', 'ContractController.update');

  Route.put('/contracts/:id/shutdown', 'ContractController.shutdown');
  Route.put('/contracts/:id/reactive', 'ContractController.reactive');

  Route.get('/courseActivities', 'CourseActivityController.index');
  Route.post('/courseActivities', 'CourseActivityController.store');

  Route.get('/reports/actives', 'ActiveContractController.index');
  Route.get('/reports/inactives', 'InactiveContractController.index');

}).middleware(['auth']);

