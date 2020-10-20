import WEBHOOK from './webhook';

import axios from 'axios';

async function __main__()
{
    WEBHOOK();
    await keepAlive();
}

async function keepAlive()
{
    setInterval(async () =>
    {
        const url = `https://${process.env.APP_NAME}.herokuapp.com`;

        await axios.get(url);
    }, 19 * 60 * 1000);
}


__main__();