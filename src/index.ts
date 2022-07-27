import { MongoClient } from 'mongodb';

const client = new MongoClient(`mongodb://root:example@localhost:27017/?retryWrites=true&writeConcern=majority`, { connectTimeoutMS: 1000 });

async function main() {
    try {
        const db = client.db('myDb');
        const table = db.collection('myTable');
        const res = await table.insertOne({
            hello: 'world!'
        });
        console.log(`Insert one doc: ${res.insertedId}`);
    } catch (error) {
        console.error(error);
    }
}

main();
