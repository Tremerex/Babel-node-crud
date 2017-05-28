import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import promise from 'promise';
import config from './config';
import controllers from './controllers';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

for(let key in controllers) {
    app.use(controllers[key]);
}

mongoose.connect(config.database, () => {
    mongoose.Promise = promise;
    app.listen(3000, () => console.log('listing the port 3000'));
});