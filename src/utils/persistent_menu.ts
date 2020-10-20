import request from 'request';
import express, { Response } from 'express';

const GetStartedButton = (res: express.Response) =>
{
    const messageData: Object = 
    {
        "get_started":
        {
            "payload": "GET_STARTED_PAYLOAD"
        }
    };

    request(
    {
        "url": `https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
        "method": "POST",
        "headers":
        {
            'Content-Type': 'application/json'
        },
        "form": messageData
    },
    (error, respond, body) =>
    {
        if (!error && respond.statusCode == 200)
        {
            console.log("Finished initializing Get Started button.");
            res.send(body);
        }
        else console.log(error);
    });
}

const StartingMenu = (res: express.Response) =>
{
    const categories: Object =
    {
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions":
        [
            {
                type: "postback",
                title: "Build your first bot",
                payload: "STEP 0"
            },
            {
                type: "postback",
                title: "About us",
                payload: "STEP 0"
            }
        ]
    }

    request(
    {
        "url": `https://graph.facebook.com/v2.6/me/thread_settings?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
        "method": "POST",
        "headers":
        {
            'Content-Type': 'application/json'
        },
        "form": categories
    },
    (error, respond, body) =>
    {
        if (!error && respond.statusCode == 200)
        {
            console.log("Successfully built the starting menu.");
            res.send(body);
        }
        else console.log(error);
    });
}


export { GetStartedButton, StartingMenu };