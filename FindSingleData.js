const { client } = require('./dbConfig');

var findOneDataWithoutCondition = () => {
    var database = client.db("School");
    var table = database.collection("students");
    table.findOne(function (err, result) {
        if (err) {
            console.log("Data not found");
        }
        else {
            console.log(result);
        }
    });
}

function findOneDataWithCondition() {
    var database = client.db("School");
    var table = database.collection("students");
    var data = { Roll: "01" };
    table.findOne(data, function (err, result) {
        err != null ? console.log("Data Not Found") : console.log(result);
    });
}

findOneDataWithoutCondition();
//findOneDataWithCondition();