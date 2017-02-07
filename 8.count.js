var mongo = require('mongodb').MongoClient
var url = `mongodb://${process.env.IP}:27017/learnyoumongo`
var age = process.argv[2]

mongo.connect(url, function (err, db) {
    if (err) {
        console.log(`ERR: ${err}`)
    } else {
        db.collection('parrots').count( {
            age: {$gt: +age}
        }, function(err, count) {
            if (err) {
                console.log(`ERR: ${err}`)
            } else {
                console.log(count)
        }})
        db.close()
    }
})