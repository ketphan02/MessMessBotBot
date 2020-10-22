import { StageFiveMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageThree from "./three";

const stageFour = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "Revealed the variables")
    {
        StageFiveMenu(sender_id);

        const msg: String = "Perfect ! Now, please go to this link (https://discord.com/developers/applications), create new application, and fill your bot's display name\n" +
        "After that, go to the Bot tab and add new bot.\n" +
        `You will see a Copy button. Press it and you're cool.`;

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        await stageThree(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageFour;