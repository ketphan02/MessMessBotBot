import {StageSixMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageFour from "./four";

const stageFive = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "Got the token")
    {
        StageSixMenu(sender_id);

        const msg: String = "Nice!\n" +
        `Remember the token you coppied from last step? Now, type DISCORD_TOKEN into the KEY part, and paste the coppied token into the VALUE part\n\n` +
        `You're not done yet! Type APP_NAME into the KEY part, and type your bot's back-end name.\n` +
        "These variables are case sensitive, so make sure you type every characters correctly.";

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        await stageFour(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageFive;