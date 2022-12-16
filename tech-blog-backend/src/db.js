// https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site-15153869/setting-up-hosting-for-mongodb
import { MongoClient } from 'mongodb'; 

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.jgte2wm.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    db = client.db('tech-blog');
    cb();
}

export {
    db,
    connectToDb,
};