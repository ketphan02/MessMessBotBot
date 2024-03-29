import { StageThreeMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageZero from "./zero";

const stageTwo = async (sender_id: string, title: string) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    if (title == "Accessed the link")
    {
        StageThreeMenu(sender_id);
        arr.push(title);

        await sendData(sender_id, "Now, you will see a tab popped up. There will be a space for you to fill your bot's back-end name, go ahead and do it!");
    }
    else if (title == "Go back")
    {
        arr.pop()
        const req = arr[arr.length - 1];
        console.log(req);
        await stageZero(sender_id, req);
    }

    title_arr[index].arr = arr;
}

export default stageTwo;