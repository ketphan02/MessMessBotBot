import { StageTwoMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import startingStage from "./starting";

const stageOne = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "Discord Bot")
    {
        StageTwoMenu(sender_id);

        const msg: String = "Welcome to Discord Bot Guild. I will guild step-by-step to create your Discord Bot.\n" +
        "First, follow this link (https://j2c.cc/customizediscordbot), scroll down and hit the purple button\n" +
        "The password for the link is DiscordBot";

        await sendData(sender_id, msg);
    }
    else if (title === "Messenger Bot")
    {
        await sendData(sender_id, "Sorry, this function is currently in development.")
    }
    else if (title === "Go back")
    {
        arr.pop();
        arr.pop();
        await startingStage(sender_id);
    }

    title_arr[index].arr = arr;
}

export default stageOne;