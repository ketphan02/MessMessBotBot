import request from 'request';
import express from 'express';

const GetStartedButton = () =>
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

/**
 * @description Contain 2 sections: Build bot and About us
 * @param {sender_id} String The id of the sender
 */
const StartingMenu = (sender_id: String) =>
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

/**
 * @description Answer for question: "What kind of bot you want to build ?" The answers are Discord and Messenger
 * @param {sender_id} String The id of the sender
 */
const StageOneMenu = (sender_id: String) =>
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
                    title: "Discord Bot",
                    payload: "STEP 1"
                },
                {
                    type: "postback",
                    title: "Messenger Bot",
                    payload: "STEP 1"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 1"
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
            console.log("Successfully built the stage 1 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 1: " + error);
        }
    });
}

/**
 * @description Answer for question about heroku deployment.
 * @param {sender_id} String The id of the sender
 */
const StageTwoMenu = (sender_id: String) =>
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
                    title: "Pressed the button",
                    payload: "STEP 2"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 2"
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
            console.log("Successfully built the stage 2 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 2: " + error);
        }
    });
}

/**
 * @description Answer for question for stage 2.
 * @param {sender_id} String The id of the sender
 */
const StageThreeMenu = (sender_id: String) =>
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
                    title: "Named it",
                    payload: "STEP 3"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 3"
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
            console.log("Successfully built the stage 3 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 3: " + error);
        }
    });
}

/**
 * @description Answer for question: "Have you pressed reveal config vars".
 * @param {sender_id} String The id of the sender
 */
const StageFourMenu = (sender_id: String) =>
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
                    title: "Revealed the variables",
                    payload: "STEP 4"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 4"
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
            console.log("Successfully built the stage 4 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 4: " + error);
        }
    });
}

/**
 * @description Answer if people have their Discord Token.
 * @param {sender_id} String The id of the sender
 */
const StageFiveMenu = (sender_id: String) =>
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
                    title: "Got the token",
                    payload: "STEP 5"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 5"
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
            console.log("Successfully built the stage 5 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 5: " + error);
        }
    });
}

/**
 * @description Answer for question are you done filling in the variables.
 * @param {sender_id} String The id of the sender
 */
const StageSixMenu = (sender_id: String) =>
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
                    title: "I have filled them",
                    payload: "STEP 6"
                },
                {
                    type: "postback",
                    title: "Extra customization",
                    payload: "STEP 6"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 6"
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
            console.log("Successfully built the stage 6 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 6: " + error);
        }
    });
}

/**
 * @description Extra variables customization.
 * @param {sender_id} String The id of the sender
 */
const StageSix01Menu = (sender_id: String) =>
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
                    title: "Filled them all",
                    payload: "STEP 6.1"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 6.1"
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
            console.log("Successfully built the stage 6.1 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 6.1: " + error);
        }
    });
}

/**
 * @description "Answer for question does your bot have enough permission ?".
 * @param {sender_id} String The id of the sender
 */
const StageSevenMenu = (sender_id: String) =>
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
                    title: "Permission granted",
                    payload: "STEP 7"
                },
                {
                    type: "postback",
                    title: "Go back",
                    payload: "STEP 7"
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
            console.log("Successfully built the stage 7 menu.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage 7: " + error);
        }
    });
}

/**
 * @description "Answer for question does your bot have enough permission ?".
 * @param {sender_id} String The id of the sender
 */
const StageFinalMenu = (sender_id: String) =>
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
                    title: "Start over",
                    payload: "GET_STARTED_PAYLOAD"
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
            console.log("Successfully restart the process.");
        }
        else
        {
            console.log(respond.statusCode);
            console.log("Stage final: " + error);
        }
    });
}

export {
    GetStartedButton,
    StartingMenu,
    StageOneMenu,
    StageTwoMenu,
    StageThreeMenu,
    StageFourMenu,
    StageFiveMenu,
    StageSixMenu,
    StageSix01Menu,
    StageSevenMenu,
    StageFinalMenu
};