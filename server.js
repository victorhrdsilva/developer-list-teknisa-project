import bodyParser from 'body-parser';
import express from 'express';
import syncDatabaseRouter from './src/routers/syncDatabaseRouter.js';
import programmerRouters from './src/routers/programmerRouters.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

//DB Sync router
app.use(syncDatabaseRouter);

// Programmer routers
app.use(programmerRouters);


app.listen(port, () => console.log(`App running in port: ${port}`));
