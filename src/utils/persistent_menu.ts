import request from 'request';
import express from 'express';

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
        "url": `https://graph.facebook.com/v${process.env.FB_GRAPH_API_VERSION}/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
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
        }
        else
        {
            console.log("GetStartedButton: " + error);
        }
    });
}

const StartingMenu = (res: express.Response, sender_id: String) =>
{
    const categories: Object =
    {
        psid: sender_id,
        persistent_menu:
        [{
            locale: "default",
            composer_input_disabled: true,
            call_to_actions:
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
        }]
    }

    request(
    {
        "url": `https://graph.facebook.com/v${process.env.FB_GRAPH_API_VERSION}/me/custom_user_settings?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
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
        }
        else
        {
            console.log(respond.statusCode);
            console.log("StartingMenu: " + error);
        }
    });
}


export { GetStartedButton, StartingMenu };