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

    // Start the server
    app.listen(port, () => console.log(`Listening on ${port}`));
}

export { WEBHOOK };