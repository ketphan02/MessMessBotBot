import request from 'request';
import express from 'express';

const GetStartedButton = (res: express.Response) =>
{
    const messageData: Object = 
    {
        "get_started":
        [{
            "payload": "GET_STARTED_PAYLOAD"
        }]
    };

    request(
    {
        "url": `https://graph.facebook.com/v2.6/me/custom_user_settings?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
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


export { GetStartedButton };