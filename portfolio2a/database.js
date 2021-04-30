import MongoClient from 'mongodb';

// url for connection below - using my other link for now
// const url = "mongodb+srv://kmarshall:CxhR4dvy1p8jsxGy@cluster0.oewwc.mongodb.net/test";


class Database {
    constructor() {
        // Setup a default value for connection
        this.connection = null;
        // Setup a default value for database
        this.database = null;
        // Setup a default value for collection
        this.collection = null;
    }
    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("portfolio2");
        // Select a collection.
        this.collection = this.database.collection("people"); 
    }

        async createOne(first, last, music) {
            let object = {
                "firstName": first,
                "lastName": last,
                "favoriteMusic": music
            };
            if(this.collection != null) {
                // Wait for the insertOne() method to finish.
                return await this.collection.insertOne(object);
            }
        }
    

    async readOne(query) {
        let results = await this.collection.findOne({firstName: query});
            if (results != null) {
                return results;
            }
            else{
                return{person: "Not found"};
            }
    }

  

    close() {
    if(this.collection != null) {
      this.connection.close();
    }
  }
}

export default Database;