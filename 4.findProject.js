var mongo = require('mongodb').MongoClient
var url = `mongodb://${process.env.IP}:27017/learnyoumongo`
var age = process.argv[2]

mongo.connect(url, function (err, db) {
    if (err) {
        console.log(`ERR: ${err}`)
    } else {
        db.collection('parrots').find( {
            age: {
                $gt: +age
                }
            }, 
            {
                name: 1,
                age: 1,
                _id: 0
            }).toArray(function(err, document) {
            if (err) {
                console.log(`ERR: ${err}`)
            } else {
                console.log(document)
        }})
        db.close()
    }
})