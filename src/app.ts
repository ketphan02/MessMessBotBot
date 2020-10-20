import WEBHOOK from './webhook';

import axios from 'axios';

async function __main__()
{
    WEBHOOK();
    await keepAlive();
}

async function keepAlive()
{
    setInterval(() =>
    {
        const url = `https://${process.env.APP_NAME}.herokuapp.com`;

        axios.get(url);
    }, 19 * 60 * 1000);
}


__main__();