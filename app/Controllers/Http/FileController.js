'use strict'

const Drive = use('Drive');
const File = use('App/Models/File')
const TraineeDocument = use('App/Models/TraineeDocument')
class FileController {

  async store({ request, response }) {

    const validationOptions = {
      types: ['image'],
      size: '10mb',
  };


    request.multipart.file('image', validationOptions, async (file) => {

      try {
        const query = request.get();


        const ContentType = file.headers['content-type']
        const ACL = "public-read";
        const Key = `${(Math.random() * 100).toString(32)}-${file.clientName}`

        const url = await Drive.put(Key, file.stream, {
          ContentType,
          ACL,

        })

        if (query.type_upload === 'trainee_document_create') {
          const currentFile = await File.create({
            name: file.clientName,
            key: Key,
            url,
            content_type: ContentType
          })

          await TraineeDocument.create({
            file_id: currentFile.id,
            trainee_id: query.trainee_id
          })
        } else if (query.type_upload === 'trainee_document_upload') {
          const trainee_document = await File.find(query.file_id)
          trainee_document.name = file.clientName
          trainee_document.url = url
          trainee_document.key = Key
          trainee_document.content_type = ContentType
          await trainee_document.save()
        }
      } catch (err) {
        return response.status(err.status).json({
          error: {
            message: 'Não foi possivel',
            err_message: err.message
          }
        })
      }
    })

    await request.multipart.process();

  }

  async show({ params, request, response, view }) {
    const { id: name } = params;

    try {
      const file = await File.findByOrFail('name', name)

      response.implicitEnd = false
      response.header('Content-Type', file.content_type)
      const stream = await Drive.getStream(file.key)

      stream.pipe(response.response)


    } catch (err) {

      return response.status(err.status).json({
        error: {
          message: 'Arquivo nao existe',
          err_message: err.message
        }
      })

    }


  }

}

module.exports = FileController
