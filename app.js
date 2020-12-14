const express = require('express')
const exphbs = require('express-handlebars')

const generateTrashTalk = require('./generateTrashTalk')

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

app.post('/', (req, res) => {
  const job = req.body.job
  // name="job" in radio inputs. For example, req.body = {job: engineer}
  const trashTalk = generateTrashTalk(job)
  res.render('index', {
    trashTalk: trashTalk,
    job: job,
    helpers: {
      // helpers to check the input radios based on user selection
      engineerChecker() {
        if (job === 'engineer') return 'checked'
      },
      designerChecker() {
        if (job === 'designer') return 'checked'
      },
      founderChecker() {
        if (job === 'founder') return 'checked'
      }
    }

  })
})


app.listen(port, () => console.log(`Express server is on port: ${port}`))