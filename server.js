import bodyParser from 'body-parser';
import express from 'express';
import syncDatabase from './src/controllers/syncDatabase.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

//DB Sync
app.use(syncDatabase);

app.listen(port, () => console.log(`App running in port: ${port}`));
