import WEBHOOK from './webhook';

import fetch from 'node-fetch';

async function __main__()
{
    WEBHOOK();
    keepAlive();
}

const keepAlive = () =>
{
    setInterval(async () =>
    {
        const url = `https://${process.env.APP_NAME}.herokuapp.com`
        await fetch(url);
        console.log("Fetching...");
    }, 5 * 60 * 1000);
}


__main__();