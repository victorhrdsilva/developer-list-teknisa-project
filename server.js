import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.listen(port, () => console.log(`App running in port: ${port}`));
