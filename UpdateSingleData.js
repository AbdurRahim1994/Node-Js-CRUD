const { client } = require('./dbConfig');

const updateOneData = () => {
    var database = client.db("School");
    var table = database.collection("students");
    var filter = { Roll: "01" };
    var updateData = { $set: { Name: "Sujan Mahmud" } }
    table.updateOne(filter, updateData, (err, result) => {
        err != null ? console.log("Data update failed") : console.log(`${result.modifiedCount} data updated successfully`)
    });
}

updateOneData();