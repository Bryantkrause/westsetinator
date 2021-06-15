const { Orders } = require('../models')

module.exports = app => {

  // GET all Order
  app.get('/order', (req, res) => {
    Orders.find()
      .then(Orders => res.json(Orders))
      .catch(e => console.error(e))
  })

    // GET one Order
    app.get('/order/:id', (req, res) => {
        Orders.findOne({ _id: req.params.id })
          .then(Order => res.json(Order))
          .catch(e => console.error(e))
      })

  // POST one Order
  app.post('/order', (req, res) => {
    console.log("Order creation")
    Orders.create(req.body)
    .then( r => console.log(res.json(r.body)))
    .catch(e => console.error(e))
  })


    // update one Order
    app.put('/order/:id', (req, res) => {
      console.log("Order put route hit")
      Orders.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one Order
        app.delete('/order/:id', (req, res) => {
            Orders.deleteOne({ _id: req.params.id })
              .then(Order => res.json(Order))
              .catch(e => console.log(e))
      })
    }