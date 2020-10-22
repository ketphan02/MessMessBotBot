import { StageSevenMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageSix from "./six";

const stageSix01 = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "Fill them all")
    {
        StageSevenMenu(sender_id);

        await sendData(sender_id, "Great ! We're almost there.");
        await sendData(sender_id, "Let's go back to the discord page we opened. Go to OAuth2 tab and scroll down.");
        await sendData(sender_id, "Find bot and choose it (Idk what do other options mean), and copy the generated url");
        await sendData(sender_id, "Paste it on a new url bar (but don't press enter yet). In the back of the url, you will see permission=0, replace number 0 with the number 3156032");
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        await stageSix(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageSix01;