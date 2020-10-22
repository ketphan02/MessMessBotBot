import express, { Request, Response } from 'express';

import { GetStartedButton, StartingMenu } from '../../utils/persistent_menu';

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

/**
 * @description GET Method.
 * @param app From the webhook function.
 */
export default function GET(app: express.Express)
{
    app.get("/", (req: Request, res: Response) =>
    {

        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode && token)
        {
            if (mode === 'subscribe' && token === VERIFY_TOKEN)
            {
                console.log('VERIFIED');
                res.status(200).send(challenge);

                GetStartedButton(res);
                StartingMenu(res);
            }
            else
            {
                res.sendStatus(403);
                return;
            }
        }
    });
}

