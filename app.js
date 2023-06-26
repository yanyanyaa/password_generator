const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generator_password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// seeting body-parser
app.use(express.urlencoded({ extend: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  // console.log(options)
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})