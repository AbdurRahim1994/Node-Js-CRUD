const { client } = require('./dbConfig');

const updateManyData = () => {
    var database = client.db("School");
    var table = database.collection("students");
    var filter = { Address: "Dhaka" };
    var updateData = { $set: { Address: "Barishal" } };
    table.updateMany(filter, updateData, (err, result) => {
        err != null ? console.log("Data update failed") : console.log(result.modifiedCount);
    });
}

updateManyData();