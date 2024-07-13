import express from 'express'
import router from './routes'

function createApp() {
  const app = express()

  // Esse middleware define que o conteúdo será um json
  app.use(express.json())

  app.use("/api", router)

  return app
}

export default createApp
