const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

// view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// static file
app.use(express.static('public'))

// middleware
app.use(express.urlencoded({ extended: true }))


// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => console.log(`Express server is on port: ${port}`))