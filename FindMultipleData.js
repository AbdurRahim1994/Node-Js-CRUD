const { client } = require('./dbConfig');

function findAllData() {
    var database = client.db("School");
    var table = database.collection("students");
    table.find().toArray((err, result) => {
        err != null ? console.log("Data Not Found") : console.log(result);
    });
}

findAllData();