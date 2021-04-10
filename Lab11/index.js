import MongoClient from 'mongodb';

const URL = "";


MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({review_score: {$gte: "99"}, beds: {$gte: "5"}, price: {$lte: "200"}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();

    })
})
.catch(error => {
    console.log("Error: " + error);
})