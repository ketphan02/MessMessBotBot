import express, { Request, Response } from 'express';

import sendData from '../sendData/send';


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
            if (body.entry && body.entry.length <= 0) return;
            
            body.entry.forEach((entry: {messaging: []}) =>
            {
                console.log(entry.messaging);

                entry.messaging.forEach(async (event:
                {
                    sender: { id: String },
                    recipient: { id: String },
                    timestamp: Date,
                    postback?: { title: String, payload: String },
                    message?: { text: String }
                }) => 
                {
                    const sender_id: String = event.sender.id;

                    if (event.postback)
                    {
                        const data: { title: String, payload: String } = event.postback;
                        if (data.payload === "GET_STARTED_PAYLOAD")
                        {
                            const WELCOME_MESSAGE: String = "[WELCOME MESSAGE]";
                            sendData(sender_id, WELCOME_MESSAGE);
                        }
                    }
                    else if (event.message)
                    {
                        const data: { text: String } = event.message;
                        sendData(sender_id, "[USER'S MESSAGE]\n" + data.text);
                    }
                });
            });
        }
    });
}