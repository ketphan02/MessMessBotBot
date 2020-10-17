import WEBHOOK from './webhook';
import PERSISTENT_MENU from './utils/persistent_menu';

async function __main__()
{
    await PERSISTENT_MENU();
    
    await WEBHOOK();
}

__main__();