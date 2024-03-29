import { StageFinalMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageFive from "./five";
import stageSix from "./six";

const stageSeven = async (sender_id: string, title: string) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    if (title == "Permission granted")
    {
        StageFinalMenu(sender_id);
        arr.push(title);

        const msg: string = "Congratulation! Your bot is ready to go.\n" +
        "To start yout bot, type !play <SONG-YOU-WANT> in your Discord server\n\n" +
        "Thank you for using me, I appreciate that.";

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {
        arr.pop()
        const req = arr[arr.length - 1];
        if (arr.length === 6) await stageSix(sender_id, req);
        else await stageFive(sender_id, req);
    }

    title_arr[index].arr = arr;
}

export default stageSeven;