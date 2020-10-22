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

export let title_arr = new Array;

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
                            startingStage(sender_id);
                        }
                        else if (data.payload === "STEP 0")
                        {
                            stageZero(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 1")
                        {
                            stageOne(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 2")
                        {
                            stageTwo(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 3")
                        {
                            stageThree(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 4")
                        {
                            stageFour(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 5")
                        {
                            stageFive(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 6")
                        {
                            stageSix(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 6.1")
                        {
                            stageSix01(sender_id, data.title);
                        }
                        else if (data.payload === "STEP 7")
                        {
                            stageSeven(sender_id, data.title);
                        }
                    }
                    else if (event.message) return;
                });
            });
        }

        res.sendStatus(200);
    });
}