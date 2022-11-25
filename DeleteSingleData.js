const { client } = require('./dbConfig');

const deleteOneData = () => {
    var database = client.db("School");
    var table = database.collection("students");
    table.deleteOne({ Roll: "01" }, (err, result) => {
        err != null ? console.log("Data delete failed") : console.log(`${result.deletedCount} data deleted`);
    });
}

deleteOneData();