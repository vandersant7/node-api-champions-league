import express from 'express'
import router from './routes'
import cors from 'cors'

function createApp() {
  const app = express()

  // Esse middleware define que o conteúdo será um json
  app.use(express.json())
  app.use('/api', router)

  //Essas configurações definem que pode acessar minhas API, se tiver mais de um cliente consumindo a API, as propriedades origin e methods podem ser coladas dentro de um vetor.
  // const corsOption = {
  //   origin:['http://evandro.developer.dev', 'http://gov.br'],
  //   methods: ['GET', 'UPDATE'],
  // }
  // app.use(cors(corsOption))
  app.use(cors)

  return app
}

export default createApp
