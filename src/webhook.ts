import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000 || process.env.PORT;


/**
 * @description Initialize the server and handle all the requests.
 */
const WEBHOOK = () =>
{
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false}));

    app.get("/", (req, res) =>
    {
        res.send("Bruh");
    });

    app.get('/verfyWebhook', (req, res) =>
    {
        const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode && token)
        {
            if (mode === 'subscribe' && token === VERIFY_TOKEN)
            {
                console.log('VERIFIED');
                res.status(200).send(challenge);
            }
            else res.sendStatus(403);
        }
    });

    // Start the server
    app.listen(port, () => console.log(`Listening on ${port}`));
}

export { WEBHOOK };