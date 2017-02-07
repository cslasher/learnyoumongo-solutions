var mongo = require('mongodb').MongoClient
var database = process.argv[2]
var collection = process.argv[3]
var id = process.argv[4]
var url = `mongodb://${process.env.IP}:27017/${database}`
console.log(url + "\n" + collection + "\n" + id)

mongo.connect(url, function (err, db) {
    if (err) {
        console.log(`ERR: ${err}`)
    } else {
        db.collection(collection).remove( {
            _id: id
            }, 
            function(err, data) {
            if (err) {
                console.log(`ERR: ${err}`)
            } 
            db.close()
        })
    }
})