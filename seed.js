const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/carousel', (error, db) => {
  const images = db.collection('images')
  images
    .find({})
    .toArray()
    .then(results => {
      !results.length
        ? images
            .insertMany([
              { _id: 1, image: 'images/stormtrooper.png' },
              { _id: 2, image: 'images/r2d2.png' },
              { _id: 3, image: 'images/boba.png' },
              { _id: 4, image: 'images/duel.png' },
              { _id: 5, image: 'images/c3po.png' },
              { _id: 6, image: 'images/march.png' },
              { _id: 7, image: 'images/last.png' }
            ])
            .then(() => db.close())
            .catch(error => console.error(error))
        : db.close()
    })
    .catch(error => console.error(error))
})
