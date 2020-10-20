import WEBHOOK from './webhook';

import schedule from 'node-schedule';

async function __main__()
{
    WEBHOOK();
    await keepAlive();
}

async function keepAlive()
{
    schedule.scheduleJob('* /10 * * * *', () =>
    {
        console.log("I know, you know, we all know.");
    });
}


__main__();