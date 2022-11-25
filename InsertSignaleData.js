const { client } = require('./dbConfig');

const insertSingleData = () => {
    var database = client.db("School");
    var table = database.collection("students");
    var data = { Name: "Abdur Rahim", Roll: "01", Address: "Dhaka" }
    table.insertOne(data, (err, result) => {
        err != null ? console.log("Data insert failed") : console.log("Data insert successful");
    });
}

insertSingleData();