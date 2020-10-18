import request from "request";

export default async function sendData(id: String, text: String)
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

    await request(
    {
        "url": `https://graph.facebook.com/v${process.env.FB_GRAPH_API_VERSION}/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
        "method": "POST",
        "headers":
        {
            "Content-Type": "application/json"
        },
        "form": messData
    }, (error, response, body) =>
    {
        if (error) console.log(`Unable to send message: ${error}`);
    });
}