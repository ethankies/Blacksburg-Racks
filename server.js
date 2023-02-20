const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

// Serve the static files from the React app
app.use(express.static('client/build'));

async function main() {
    //constant from connection uri
    const uri = "mongodb+srv://ekies:VchsFsR41j1uQZNp@blacksburgrackscluster.0fs1kyd.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri);
    try {
        await client.connect();

        //print all databases
        await listDatabases(client);
 
        // Start the server
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        
    } catch (e) {

        console.error(e);
    } finally {
        //close the connection to my cluster
        await client.close();
    }

    //block further exection until this is completed
}

main().catch(console.error);

async function listDatabases(client) {
    // Returns a promise that will resolve to the list of databases
    const databaseList = await client.db().admin().listDatabases();

    console.log("databases:")
    try {
        databaseList.databases.forEach(db => {
            console.log(`- ${db.name}`);
        });
    } catch (e) {
        console.log(e);
    }


}