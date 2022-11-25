const { client } = require('./dbConfig');

const deleteManyData = () => {
    var database = client.db("School");
    var table = database.collection("students");
    table.deleteMany({ Address: "Dhaka" }, (err, result) => {
        err != null ? console.log("Data delete failed") : console.log(`${result.deletedCount} data deleted`);
    });
}

deleteManyData();