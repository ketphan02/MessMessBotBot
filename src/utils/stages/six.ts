import { StageSevenMenu, StageSix01Menu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import sendImage from "../sendData/sendimg";
import stageFour from "./four";

const stageSix = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    if (title == "I have filled them")
    {
        StageSevenMenu(sender_id);
        arr.push(title);

        const msg: String = "Great! We're almost there.\n\n"
        + "Let's go back to the discord page we opened. Go to OAuth2 tab and scroll down.\n"
        + "Find bot and choose it (Idk what do other options mean), and copy the generated url.\n"
        + "Paste it on a new url bar (but don't press enter yet). In the back of the url, you will see permission=0, replace number 0 with the number 3156032. Then Enter.";

        await sendData(sender_id, msg);
    }
    else if (title == "Extra customization")
    {
        StageSix01Menu(sender_id);
        arr.push(title);

        await sendData(sender_id, "Now you understood how to fill in the KEY and VALUE. Let's add more KEYS and VALUES according to this");
        await sendImage(sender_id, "https://github.com/ketphan02/MessMessBotBot/tree/master/src/utils/images/Customize.png");
    }
    else if (title == "Go back")
    {
        await stageFour(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageSix;