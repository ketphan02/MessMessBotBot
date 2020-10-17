import request from 'request';

const GetStarted = async () =>
{
    const messageData: Object = 
    {
        "get_started":
        [{
            "payload": "GET_STARTED"
        }]
    };

    request(
    {
        "url": `https://graph.facebook.com/v${process.env.FB_GRAPH_API_VERSION}/me/custom_user_settings?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
        "method": "POST",
        "headers":
        {
            'Content-Type': 'application/json'
        },
        "form": messageData
    },
    (err, res, body) =>
    {
        if (!err && res.statusCode === 200) console.log(body);
        else console.log(err);
    });
}

const __main__ = async () =>
{
    console.log("Loading persistent menu");

    await GetStarted();

    console.log("Finish loading persistent menu");
}

export default __main__;