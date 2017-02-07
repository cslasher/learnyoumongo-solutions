var mongo = require('mongodb').MongoClient
var url = `mongodb://${process.env.IP}:27017/learnyoumongo`
var size = process.argv[2]
var match = {
    $match: {
        size: size
    }
}
var group =  { $group: {
                _id: null
                , average: {
                    $avg: '$price'
                }}}
mongo.connect(url, function (err, db) {
    if (err) {
        console.log(`ERR: ${err}`)
    } else {
        db.collection('prices').aggregate([
            match, group
            ]).toArray(function(err, results) {
            if (err) {
                console.log(`ERR: ${err}`)
            } else {
                console.log(results[0].average.toFixed(2))
        }})
        db.close()
    }
})