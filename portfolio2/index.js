import MongoClient from 'mongodb';

const URL = "mongodb+srv://katiemarshall:andydaddy@cluster0.vfvjv.mongodb.net/test";
//totally forgot you'd see my password, whoops!

const chalk = require('chalk');


MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_restaurants");

    let collection = database.collection("restaurants");

    let cursor = collection.find({bourough: {$eq: "Brooklyn"}, cuisine: {$in: "Ice Cream"}, grades: {$eq: "Array"}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();

    })
})
.catch(error => {
    console.log(chalk.blue("Error: " + error));
})