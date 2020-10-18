import request from "request";

export default function sendData(id: String, text: String)
{
    const messData = 
    {
        "recipient":
        {
            "id": id
        },
        "message":
        {
            "text": text
        }
    };

    request(
    {
        "url": `https://graph.facebook.com/v${process.env.FB_GRAPH_API_VERSION}/me/messages`,
        "qs":
        {
            "access_token": process.env.PAGE_ACCESS_TOKEN
        },
        "method": "POST",
        "json": messData
    }, (error, response, body) =>
    {
        if (error) console.log(`Unable to send message: ${error}`);
    });
}