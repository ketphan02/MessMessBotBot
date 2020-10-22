import express, { Request, Response } from 'express';

import startingStage from '../stages/starting';
import stageZero from '../stages/zero';
import stageOne from '../stages/one';
import stageTwo from '../stages/two';
import stageThree from '../stages/three';
import stageFour from '../stages/four';
import stageFive from '../stages/five';
import stageSix from '../stages/six';
import stageSix01 from '../stages/six01';
import stageSeven from '../stages/seven';

interface usr_info
{
    user_id: String,
    arr: String[]
}

export let title_arr: usr_info[];

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
                            await startingStage(sender_id);
                        }
                        else if (data.payload === "STEP 0")
                        {
                            await stageZero(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 1")
                        {
                            await stageOne(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 2")
                        {
                            await stageTwo(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 3")
                        {
                            await stageThree(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 4")
                        {
                            await stageFour(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 5")
                        {
                            await stageFive(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 6")
                        {
                            await stageSix(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 6.1")
                        {
                            await stageSix01(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 7")
                        {
                            await stageSeven(sender_id, data.title);
                        }

                        console.log(title_arr);
                    }
                    else if (event.message) return;
                });
            });
        }

        res.sendStatus(200);
    });
}