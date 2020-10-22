import express, { Request, Response } from 'express';
import { StageOneMenu, StartingMenu } from '../persistent_menu';

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
                            StartingMenu(sender_id);
                            
                            const WELCOME_MESSAGE: String = "[WELCOME MESSAGE]";
                            sendData(sender_id, WELCOME_MESSAGE);
                        }
                        else if (data.payload === "STEP 0")
                        {
                            if (data.title === "About us")
                            {
                                sendData(sender_id, "[INTRO]");
                            }
                            else if (data.title === "Build your first bot")
                            {
                                StageOneMenu(sender_id);
                                sendData(sender_id, "What kind of bot you want to build ?");
                            }
                        }
                        else if (data.payload === "STEP 1")
                        {
                            if (data.title === "Discord Bot")
                            {
                                sendData(sender_id, "[DISCORD BOT GUILD]");
                            }
                            else if (data.title === "Messenger Bot")
                            {
                                sendData(sender_id, "Sorry, this function is currently in development.")
                            }
                        }
                    }
                    else if (event.message) return;
                });
            });
        }

        res.sendStatus(200);
    });
}