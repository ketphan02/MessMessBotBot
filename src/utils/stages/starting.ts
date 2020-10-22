import { title } from "process";
import { StartingMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";

const startingStage = async (sender_id: String) =>
{
    StartingMenu(sender_id);

    const WELCOME_MESSAGE: String = "[WELCOME MESSAGE]";
    await sendData(sender_id, WELCOME_MESSAGE);

    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    const new_usr_data: { user_id: String, arr: String[] } =
    {
        user_id: sender_id,
        arr: []
    }
    
    if (index === -1) title_arr.push(new_usr_data);
    else title_arr[index].assign(new_usr_data);
}

export default startingStage;