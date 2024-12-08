const mongoose = require('mongoose');


interface MongoDbOptions {
    uri: string,
    database: string
}

export function connectMongoDb(options: MongoDbOptions) {

    mongoose.connect(`${options.uri}/${options.database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error: any) => {
            console.error('Error connecting to MongoDB:', error);
        });
}