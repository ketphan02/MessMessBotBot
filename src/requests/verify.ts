import express, { Request, Response } from 'express';

/**
 * @description Connect FB page with Heroku server.
 * @param app From the webhook function.
 */
export default function verifyWebhook(app: express.Express)
{
    app.get('/verifyWebhook', (req: Request, res: Response) =>
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
}