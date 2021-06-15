const { Hours } = require('../models')

module.exports = app => {

  // GET all Hours
  app.get('/hours', (req, res) => {
    Hours.find()
      .then(Hourss => res.json(Hourss))
      .catch(e => console.error(e))
  })

    // GET one Hours
    app.get('/hours/:id', (req, res) => {
        Hours.findOne({ _id: req.params.id })
          .then(Hours => res.json(Hours))
          .catch(e => console.error(e))
      })

  // POST one Hours
  app.post('/hours', (req, res) => {
    console.log("Hours creation")
    Hours.create(req.body)
    .then( r => console.log(res.json(r.body)))
    .catch(e => console.error(e))
  })


    // update one Hours
    app.put('/hours/:id', (req, res) => {
      console.log("Hours put route hit")
      Hours.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one Hours
        app.delete('/hours/:id', (req, res) => {
            Hours.deleteOne({ _id: req.params.id })
              .then(Hours => res.json(Hours))
              .catch(e => console.log(e))
      })
    }