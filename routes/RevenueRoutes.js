const { Revenue } = require('../models')

module.exports = app => {

  // GET all Revenue
  app.get('/revenue', (req, res) => {
    Revenue.find()
      .then(Revenues => res.json(Revenues))
      .catch(e => console.error(e))
  })

    // GET one Revenue
    app.get('/revenue/:id', (req, res) => {
        Revenue.findOne({ _id: req.params.id })
          .then(Revenue => res.json(Revenue))
          .catch(e => console.error(e))
      })

  // POST one Revenue
  app.post('/revenue', (req, res) => {
    console.log("Revenue creation")
    Revenue.create(req.body)
    .then( r => console.log(res.json(r.body)))
    .catch(e => console.error(e))
  })


    // update one Revenue
    app.put('/revenue/:id', (req, res) => {
      console.log("Revenue put route hit")
      Revenue.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one Revenue
        app.delete('/revenue/:id', (req, res) => {
            Revenue.deleteOne({ _id: req.params.id })
              .then(Revenue => res.json(Revenue))
              .catch(e => console.log(e))
      })
    }