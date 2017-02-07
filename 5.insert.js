var mongo = require('mongodb').MongoClient
var url = `mongodb://${process.env.IP}:27017/learnyoumongo`
var firstName = process.argv[2]
var lastName = process.argv[3]

var insert = {
            firstName: firstName,
            lastName: lastName
            }

mongo.connect(url, function (err, db) {
    if (err) {
        console.log(`ERR: ${err}`)
    } else {
        db.collection('docs').insert( insert, 
            function(err, data) {
            if (err) {
                console.log(`ERR: ${err}`)
            } else {
                console.log(JSON.stringify(insert))
                db.close()
        }})
    }
})