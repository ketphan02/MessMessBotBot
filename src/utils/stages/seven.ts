import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageSix from "./six";

const stageSeven = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "Permission granted")
    {
        const msg: String = "Congratulation ! Your bot is ready to go.\n" +
        "If you want to do this again, delete this chat and start over.\n" +
        "Thank you for using me, I appreciate that.";

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        await stageSix(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageSeven;