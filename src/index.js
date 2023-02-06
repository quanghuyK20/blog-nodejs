const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()

app.use(morgan('combined'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/resources/views')

app.get('/home', function (req, res) {
  res.send(`<h1>Hello</h1>`)
})

app.listen(3000)