import { StageSevenMenu, StageSix01Menu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import sendImage from "../sendData/sendimg";
import stageFive from "./five";

const stageSix = (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "I have filled them")
    {
        StageSevenMenu(sender_id);

        sendData(sender_id, "Great ! We're almost there.");
        sendData(sender_id, "Let's go back to the discord page we opened. Go to OAuth2 tab and scroll down.");
        sendData(sender_id, "Find bot and choose it (Idk what do other options mean), and copy the generated url");
        sendData(sender_id, "Paste it on a new url bar (but don't press enter yet). In the back of the url, you will see permission=0, replace number 0 with the number 3156032");
    }
    else if (title === "Extra customization")
    {
        StageSix01Menu(sender_id);

        sendData(sender_id, "Now you understood how to fill in the KEY and VALUE. Let's add more KEYS and VALUES according to this");
        sendImage(sender_id, "https://ibb.co/Pj4M7KQ");
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        stageFive(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageSix;