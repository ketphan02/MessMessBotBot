import express, { Request, Response } from 'express';
import { StartingMenu } from '../persistent_menu';

import sendData from '../sendData/send';


let ok = false;

/**
 * @description POST Method.
 * @param app From the webhook function.
 */
export default function POST(app: express.Express)
{
    app.post("/webhook", (req: Request, res: Response) =>
    {
        const body = req.body;

        if (body.object === 'page')
        {

            if (body.entry && body.entry.length <= 0) return;
            
            body.entry.forEach((entry: {messaging: []}) =>
            {
                StartingMenu(res);

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
                        else (data.payload === "STEP 0")
                        {
                            if (data.title === "About us")
                            {
                                sendData(sender_id, "[INTRO]");
                            }
                            else if (data.title === "Build your first bot")
                            {
                                sendData(sender_id, "This function is still in development");
                            }
                            else if (data.title === "Repeat")
                            {
                                ok = true;
                                sendData(sender_id, "Now, type anything, type !!! to stop");
                            }
                        }
                    }
                    else if (event.message)
                    {
                        const data: { text: String } = event.message;
                        if (ok)
                        {
                            if (data.text === "!!!")
                            {
                                sendData(sender_id, "ok, i'll stop repeating you");
                                ok = false;
                            }
                            else sendData(sender_id, "[USER'S MESSAGE]\n" + data.text);
                        }
                        else sendData(sender_id, "Please use the menu");
                    }
                });
            });
        }

        res.sendStatus(200);
    });
}