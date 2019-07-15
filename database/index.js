//////+++Database Transactions+++//////

//Import dependencies
//
const { MongoClient } = require('mongodb');

// const URLsFile = require('../database/sample-data/sampleData.json');
const { connectionStr, dbName, colName } = require('../config').DATABASE;


module.exports.getUserSchedule = (userId, callback) => {
    
    MongoClient.connect(connectionStr, (err, client) => {
        if (err) callback(err);
        else {
            const db = client.db(dbName);
            const collection = db.collection(colName);
            collection.findOne({ 'userId': userId }, (err, data) => {
                if (err) callback(err)
                else callback(null, data);
            })
        }
    });
}

