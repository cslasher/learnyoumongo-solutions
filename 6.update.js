var mongo = require('mongodb').MongoClient
var database = process.argv[2]
var url = `mongodb://${process.env.IP}:27017/${database}`

mongo.connect(url, function (err, db) {
    if (err) {
        console.log(`ERR: ${err}`)
    } else {
        db.collection('users').update( {
            username: 'tinatime'
            }, {
                $set: {
                    age: 40
                }
            }, 
            function(err, data) {
            if (err) {
                console.log(`ERR: ${err}`)
            } else {
                db.close()
            }
        })
    }
})