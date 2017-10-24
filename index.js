const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()

MongoClient.connect('mongodb://localhost/carousel', (error, db) => {
  app.use(express.static('./public'))
  const lib = db.collection('images')

  app.listen(1738, console.log('Open on port 1738'))
})
