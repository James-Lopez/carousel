const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()

MongoClient.connect('mongodb://localhost/carousel', (error, db) => {
  app.use(express.static('./public'))
  const lib = db.collection('images')

  app.get('/carousel', (req, res) => {
    lib
      .find()
      .toArray()
      .then(list => res.json(list))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
})

app.listen(1738, console.log('Open on port 1738'))
