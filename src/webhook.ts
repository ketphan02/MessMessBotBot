import express from 'express';
import bodyParser from 'body-parser';

import verifyWebhook from './verifyWebhook/verify';

const app = express();
const port = process.env.PORT || 3000;


/**
 * @description Initialize the server and handle all the requests.
 */
const WEBHOOK = async () =>
{
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false}));

    verifyWebhook(app);



    // Start the server
    app.listen(port, () => console.log(`Listening on ${port}`));
}

export default WEBHOOK;