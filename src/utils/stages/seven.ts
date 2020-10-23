import { StageFinalMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageSix from "./six";
import stageSix01 from "./six01";

const stageSeven = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    if (title == "Permission granted")
    {
        StageFinalMenu(sender_id);
        arr.push(title);

        const msg: String = "Congratulation! Your bot is ready to go.\n\n" +
        "Thank you for using me, I appreciate that.";

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {
        const req = arr[arr.length - 1];
        arr.pop()
        if (arr.length === 7) await stageSix01(sender_id, req);
        else await stageSix(sender_id, req);
    }

    title_arr[index].arr = arr;
}

export default stageSeven;