const { Expense } = require('../models')

module.exports = app => {

  // GET all Expense
  app.get('/expense', (req, res) => {
    Expense.find()
      .then(expenses => res.json(expenses))
      .catch(e => console.error(e))
  })

    // GET one expense
    app.get('/expense/:id', (req, res) => {
        Expense.findOne({ _id: req.params.id })
          .then(expense => res.json(expense))
          .catch(e => console.error(e))
      })

  // POST one expense
  app.post('/expense', (req, res) => {
    console.log("expense creation")
    Expense.create(req.body)
    .then( r => console.log(res.json(r.body)))
    .catch(e => console.error(e))
  })


    // update one expense
    app.put('/expense/:id', (req, res) => {
      console.log("expense put route hit")
      Expense.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one expense
        app.delete('/expense/:id', (req, res) => {
            Expense.deleteOne({ _id: req.params.id })
              .then(expense => res.json(expense))
              .catch(e => console.log(e))
      })
    }