import express from 'express'
import bodyParser from 'body-parser'

const app = express()

const startServer = ({
  port,
  routes,
  views,
  publicFolderDir
}) => new Promise((resolve, reject) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.set('views', views.viewEngineDir)
  app.set('view engine', views.viewEngine)
  app.use('/public', express.static(publicFolderDir))

  app.use(routes)

  app.listen(port, _ => resolve(app))
})

export default startServer
