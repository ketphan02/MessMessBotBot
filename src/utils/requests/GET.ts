import express, { Request, Response } from 'express';

import { GetStartedButton } from '../../utils/persistent_menu';

/**
 * @description GET Method.
 * @param app From the webhook function.
 */
export default function GET(app: express.Express)
{
    app.get("/", (req: Request, res: Response) =>
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

    app.post("/setup", (req: Request, res: Response) =>
    {
        GetStartedButton(res);
    });
}