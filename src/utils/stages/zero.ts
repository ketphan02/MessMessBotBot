import { StageOneMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";

const stageZero = (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "About us")
    {
        sendData(sender_id, "[INTRO]");
    }
    else if (title === "Build your first bot")
    {
        StageOneMenu(sender_id);

        sendData(sender_id, "What kind of bot you want to build ?");
    }

    title_arr[index].arr = arr;
}

export default stageZero;