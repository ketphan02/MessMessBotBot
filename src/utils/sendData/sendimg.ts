import request from "request";

export default async function sendImage(sender_id: String, imglink: String)
{
    const data =
    {
        recipient:
        {
            id: sender_id
        },
        message:
        {
            attachment:
            {
                type: "image",
                payload:
                {
                    is_reuseable: true,
                    url: imglink
                }
            }
        }
    }

    request(
        {
        "url": `https://graph.facebook.com/v${process.env.FB_GRAPH_API_VERSION}/me/messages`,
        "qs":
        {
            "access_token": process.env.PAGE_ACCESS_TOKEN
        },
        "method": "POST",
        "json": data
    }, (error, response, body) =>
    {
        if (error) console.log(`Unable to send message: ${error}`);
    });
}