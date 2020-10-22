import { StageSevenMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageFive from "./five";

const stageSix01 = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    if (title == "Filled them all")
    {
        StageSevenMenu(sender_id);
        arr.push(title);

        const msg: String = "Great! We're almost there.\n\n"
        + "Let's go back to the discord page we opened. Go to OAuth2 tab and scroll down.\n"
        + "Find bot and choose it (Idk what do other options mean), and copy the generated url.\n"
        + "Paste it on a new url bar (but don't press enter yet). In the back of the url, you will see permission=0, replace number 0 with the number 3156032. Then Enter.";

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {
        arr.pop();
        await stageFive(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageSix01;