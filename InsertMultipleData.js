const { client } = require('./dbConfig');

const insertManyData = () => {
    var database = client.db("School");
    var table = database.collection("students");
    var data = [
        { Name: "Sagor", Roll: "02", Address: "Dhaka" },
        { Name: "Khairuzzaman", Roll: "03", Address: "Dhaka" }
    ]
    table.insertMany(data, (err, result) => {
        err != null ? console.log("Data insert failed") : console.log(`${result.insertedCount} data inserted successfully`);
    });
}

insertManyData();