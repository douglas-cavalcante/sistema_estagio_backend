'use strict'

const Route = use('Route')

Route.get('/trainees', 'TraineeController.index')
Route.get('/trainees/:id', 'TraineeController.show')
Route.post('/trainees', 'TraineeController.store').validator('Trainee')
Route.put('/trainees/:id', 'TraineeController.update')
