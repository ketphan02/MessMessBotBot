import express, { Request, Response } from 'express';
import { GetStartedButton } from '../persistent_menu';


/**
 * @description POST Method.
 * @param app From the webhook function.
 */
export default function POST(app: express.Express)
{
    app.post("/", (req: Request, res: Response) =>
    {
        const body = req.body;

        if (body.object === 'page')
        {
            if (!body.entry) return;
            if (body.entry.length < 0) return;

            body.entry.forEach((event: any) =>
            {
                const data = event.messaging;

                console.log(data);
            });
        }
    })
}