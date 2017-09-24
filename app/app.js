const Server = require('../server/server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

// const connect = Database.connect()
// const users = Database.getUsers()

// if (process.env.NODE_ENV !== 'production') {
//   const webpack = require('webpack')
//   const webpackDevMiddleware = require('webpack-dev-middleware')
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   const config = require('../../webpack.dev.config.js')
//   const compiler = webpack(config)
//
//   app.use(webpackHotMiddleware(compiler))
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }))
// }

app.listen(port)
console.log(`Listening at http://10.0.2.2:${port}`)
