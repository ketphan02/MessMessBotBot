import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import verifyWebhook from './requests/verify';
import setup from './requests/setup';


const app = express();
const port = process.env.PORT || 3000;


/**
 * @description Initialize the server and handle all the requests.
 */
const WEBHOOK = () =>
{
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false}));

    verifyWebhook(app);
    setup(app);

    // app.post("/setup", (req: Request, res: Response) =>
    // {
    //     const data = req.body;

    //     console.log(data);
    // });

    // Start the server
    app.listen(port, () => console.log(`Listening on ${port}`));
}

export default WEBHOOK;