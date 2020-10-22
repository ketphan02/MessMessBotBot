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
        persistent_menu:
        [{
            locale: "default",
            composer_input_disabled: true,
            call_to_actions:
            [
                {
                    type: "postback",
                    title: "Build your first bot",
                    payload: "STEP 0",
                    call_to_actions:
                    [
                        {
                            type: "postback",
                            title: "Discord",
                            payload: "STEP 1",
                            call_to_actions:
                            [{
                                type: "postback",
                                title: "I have pressed deployed.",
                                payload: "STEP 2",
                                call_to_actions:
                                [{
                                    type: "postback",
                                    title: "I have filled in the name",
                                    payload: "STEP 3",
                                    call_to_actions:
                                    [{
                                        type: "postback",
                                        title: "I have pressed the button Reveal Config Vars",
                                        payload: "STEP 4",
                                        call_to_actions:
                                        [{
                                            type: "postback",
                                            title: "I have created my Discord bot",
                                            payload: "STEP 5",
                                            call_to_actions:
                                            {
                                                type: "postback",
                                                title: "I have coppied my Discord bot's token",
                                                payload: "STEP 6",
                                                call_to_actions:
                                                {
                                                    type: "postback",
                                                    title: "I have added APP_NAME and DISCORD_TOKEN",
                                                    payload: "STEP 7",
                                                    call_to_actions:
                                                    {
                                                        type: "postback",
                                                        title: "Extra configuration",
                                                        payload: "STEP 8"
                                                    }
                                                }
                                            }
                                        }]
                                    }]
                                }]
                            }]
                        },
                        {
                            type: "postback",
                            title: "Messenger",
                            payload: "STEP 1"
                        }
                    ]
                },
                {
                    type: "postback",
                    title: "About us",
                    payload: "STEP 0"
                },
                {
                    type: "postback",
                    title: "Repeat",
                    payload: "STEP 0"
                }
            ]
        }]
    }

    request(
    {
        "url": `https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
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