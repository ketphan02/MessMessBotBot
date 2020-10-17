import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import GET from './utils/requests/GET';
import POST from './utils/requests/POST';


const app = express();
const port = process.env.PORT || 3000;


/**
 * @description Initialize the server and handle all the requests.
 */
const WEBHOOK = () =>
{
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false}));

    GET(app);
    POST(app);

    // Start the server
    app.listen(port, () => console.log(`Listening on ${port}`));
}

export default WEBHOOK;